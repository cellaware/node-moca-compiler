import { CharStream, CommonTokenStream, ParseTreeWalker, TerminalNode, Token } from "antlr4";
import MocaParser, { Function_exprContext, Redirect_exprContext, StreamContext, Verb_noun_clauseContext } from "./antlr/MocaParser.js";
import MocaListener from "./antlr/MocaListener.js";
import MocaLexer from "./antlr/MocaLexer.js";
import { PositionUtils, RangeUtils } from "./utils.js";
import { SqlCompilationResult, SqlCompiler, SqlFormatter, SqlLanguageUtils } from "./sql.js";
import { Position, initPosition, Range, initRange, EmbeddedRange, Change, VerbNounClauseKey } from "./models.js";
import { SyntaxErrorListener } from "./err.js";

export class MocaCompiler {

    static compile(script: string) {
        const range: Range = {
            startLineNumber: 0,
            startColumn: 0,
            endLineNumber: 999999,
            endColumn: 0
        }
        return new MocaCompilationResult(script, [{ range, rangeLength: script.length, rangeOffset: 0, text: script }]);
    }

    static compileChanges(script: string, changes: Change[], prev?: MocaCompilationResult) {
        return new MocaCompilationResult(script, changes, prev);
    }

    // Removes whitespace.
    static lex(script: string): Token[] {
        return new MocaLexer(new CharStream(script)).getAllTokens().filter(token => token.type !== MocaLexer.WHITESPACE && token.type !== MocaLexer.NEWLINE);
    }
}

export class MocaCompilationResult {

    script: string;
    tokens: Token[];
    parser: MocaParser;
    parseTreeListener: MocaParseTreeListener;
    syntaxErrorListener: SyntaxErrorListener;
    embeddedRanges: EmbeddedRange[];
    sqlCompilationResults: Map<number, SqlCompilationResult>;

    constructor(script: string, changes: Change[], prev?: MocaCompilationResult) {
        this.script = script;
        this.tokens = MocaCompiler.lex(script);
        this.parser = new MocaParser(new CommonTokenStream(new MocaLexer(new CharStream(script))));
        this.parser.removeErrorListeners();
        this.syntaxErrorListener = new SyntaxErrorListener();
        this.parser.addErrorListener(this.syntaxErrorListener);

        let parseTree = this.parser.moca_script();
        this.parseTreeListener = new MocaParseTreeListener();
        new ParseTreeWalker().walk(this.parseTreeListener, parseTree);

        this.embeddedRanges = [];
        this.setEmbeddedRanges(script);

        this.sqlCompilationResults = new Map();

        if (changes.length > 0) {
            for (const embeddedRange of this.embeddedRanges) {

                for (const change of changes) {

                    if (embeddedRange.compiled) {
                        break;
                    }

                    let needsCompile = false;

                    const changeRangeLen = change.rangeLength === 0 ? change.text.length : change.rangeLength;

                    // Add scenario:
                    if ((embeddedRange.startOffset <= change.rangeOffset && embeddedRange.stopOffset > change.rangeOffset) ||
                        (embeddedRange.startOffset >= change.rangeOffset && embeddedRange.startOffset < changeRangeLen)) {
                        needsCompile = true;
                    }

                    if (needsCompile) {
                        embeddedRange.compiled = true;
                        if (embeddedRange.ctx === 'sql') {
                            let sqlScript = embeddedRange.text;
                            if (sqlScript.length > 2) {
                                // Remove '[' & ']'.
                                sqlScript = sqlScript.substring(1, sqlScript.length - 1);
                                this.sqlCompilationResults.set(embeddedRange.id, SqlCompiler.compile(sqlScript, embeddedRange.range));
                            }
                        } else if (embeddedRange.ctx === 'groovy') {
                            // TODO
                        }
                    } else {
                        if (!!prev) {
                            if (embeddedRange.ctx === 'sql') {
                                const prevSqlCompilationResult = prev.sqlCompilationResults.get(embeddedRange.id);
                                if (prevSqlCompilationResult) {
                                    this.sqlCompilationResults.set(embeddedRange.id, prevSqlCompilationResult);
                                }
                            } else if (embeddedRange.ctx === 'groovy') {
                                // TODO
                            }
                        }
                    }
                }
            }
        }
    }

    hasSyntaxErrors() {
        // TODO - check SQL
        return this.syntaxErrorListener.syntaxErrors.length > 0;
    }

    getSyntaxErrorText() {
        let buf = '';
        for (const err of this.syntaxErrorListener.syntaxErrors) {
            buf += `${err.msg}\n`;
        }
        return buf;
    }

    hasActions() {
        for (const tokens of this.parseTreeListener.verbNounClauses.values()) {
            if (tokens.length > 0) {
                const verb = tokens[0].text.toLowerCase();
                if (verb === 'create' || verb === 'change' ||
                    verb === 'remove' || verb === 'execute') {
                    return true;
                }
            }
        }

        // TODO - check SQL

        return false;
    }

    hasGroovy() {
        for (const range of this.embeddedRanges) {
            if (range.ctx === 'groovy') {
                return true;
            }
        }
        return false;
    }

    private setEmbeddedRanges(script: string) {
        let sqlIdx = 0;
        let groovyIdx = 0;
        for (const token of this.tokens) {
            if (token.type === MocaLexer.SINGLE_BRACKET_STRING) {
                const endPos = PositionUtils.getPosition(script, token.stop);
                let range: Range = initRange(token.line, token.column, endPos.lineNumber, endPos.column);
                this.embeddedRanges.push({ range, startOffset: token.start, stopOffset: token.stop, text: token.text, ctx: 'sql', id: sqlIdx++, compiled: false });
            } else if (token.type === MocaLexer.DOUBLE_BRACKET_STRING) {
                const endPos = PositionUtils.getPosition(script, token.stop);
                let range: Range = initRange(token.line, token.column, endPos.lineNumber, endPos.column);
                this.embeddedRanges.push({ range, startOffset: token.start, stopOffset: token.stop, text: token.text, ctx: 'groovy', id: groovyIdx++, compiled: false });
            }
        }
    }
}

export class MocaParseTreeListener extends MocaListener {
    redirects: Map<Token, string>;
    verbNounClauses: Map<VerbNounClauseKey, Token[]>;
    functions: Function_exprContext[];
    streams: Range[];

    constructor() {
        super();

        this.redirects = new Map();
        this.verbNounClauses = new Map();
        this.functions = [];
        this.streams = [];

        this.enterVerb_noun_clause = ((ctx: Verb_noun_clauseContext) => {
            if (!!ctx.children) {
                let buf = '';
                let tokens: Token[] = [];
                for (const child of ctx.children) {
                    if (child instanceof TerminalNode) {
                        if (child.symbol.type !== MocaLexer.CARET && child.symbol.type !== MocaLexer.WHERE) {
                            buf += `${child.getText()} `;
                            tokens.push(child.symbol);
                        }
                    } else {
                        break;
                    }
                }

                if (buf.length === 0) {
                    return;
                }

                buf = buf.trimEnd();
                this.verbNounClauses.set({ id: tokens[0].start, verbNounClause: buf }, tokens);
            }
        });

        this.enterRedirect_expr = ((ctx: Redirect_exprContext) => {
            if (!!ctx) {
                if (!!ctx.stop) {
                    this.redirects.set(ctx.stop, ctx.stop.text);
                }
            }
        });

        this.enterFunction_expr = ((ctx: Function_exprContext) => {
            if (!!ctx) {
                this.functions.push(ctx);
            }
        });

        this.enterStream = ((ctx: StreamContext) => {
            if (!!ctx) {
                this.streams.push(initRange(ctx.start.line, ctx.start.column, ctx.stop?.line ?? ctx.start.line, (ctx.stop?.stop ?? 0) - (ctx.stop?.start ?? 0)));
            }
        });
    }

    getVerbNounClauseRangeForPosition(pos: Position): Range | null {
        for (const val of Array.from(this.verbNounClauses.values())) {
            let range = initRange(val[0].line, val[0].column, val[val.length - 1].line, val[val.length - 1].column + val[val.length - 1].text.length);
            if (RangeUtils.contains(range, pos)) {
                return range;
            }
        }
        return null;
    }

    getVerbNounClauseForPosition(pos: Position): string | null {
        for (const [key, val] of Array.from(this.verbNounClauses.entries())) {
            let range = initRange(val[0].line, val[0].column, val[val.length - 1].line, val[val.length - 1].column + val[val.length - 1].text.length);
            if (RangeUtils.contains(range, pos)) {
                return key.verbNounClause;
            }
        }
        return null;
    }
}

export class MocaFormatter {

    private static isWord(token: Token) {
        switch (token.type) {
            case MocaLexer.WORD:
            case MocaLexer.OVERSTACKED_ARGS:
            case MocaLexer.SPECIAL_COMMAND_ARG_NO_ROWS:
            case MocaLexer.SPECIAL_COMMAND_ARG_DUMMY_ARG:
            case MocaLexer.ONSTACK:
            case MocaLexer.KEEP:
            case MocaLexer.NUMERIC_LITERAL:
            case MocaLexer.LIKE:
            case MocaLexer.IS:
            case MocaLexer.NOT:
            case MocaLexer.NULL:
                return true;
            default:
                return false;
        }
    }

    private static isOperator(token: Token) {
        switch (token.type) {
            case MocaLexer.EQUAL:
            case MocaLexer.NOT_EQUAL:
            case MocaLexer.LESS:
            case MocaLexer.GREATER:
            case MocaLexer.LESS_EQUAL:
            case MocaLexer.GREATER_EQUAL:
            case MocaLexer.PLUS:
            case MocaLexer.MINUS:
            case MocaLexer.STAR:
            case MocaLexer.DIV:
            case MocaLexer.MOD:
                return true;
            default:
                return false;
        }
    }

    private static tokenAddsNewLine(token: Token) {
        switch (token.type) {
            case MocaLexer.SEMI_COLON:
            case MocaLexer.PIPE:
            case MocaLexer.AMPERSAND:
            case MocaLexer.LEFT_BRACE:
            case MocaLexer.RIGHT_BRACE:
            case MocaLexer.WHERE:
            case MocaLexer.AND:
                return true;
            default:
                return false;
        }
    }

    static format(mocaCompilationResult: MocaCompilationResult): string {

        let tokens = mocaCompilationResult.tokens;

        let buf = '';
        let indentBuf = '';
        let parenCounter = 0;

        let sqlCompilationResultIdx = 0;

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const prevToken = (i === 0) ? token : tokens[i - 1];
            const nextToken = (i === tokens.length - 1) ? token : tokens[i + 1];

            switch (token.type) {
                case MocaLexer.DOUBLE_BRACKET_STRING:
                    buf += token.text;
                    break;
                case MocaLexer.SINGLE_BRACKET_STRING:
                    if (SqlLanguageUtils.isSql(token.text)) {
                        let sqlRes = mocaCompilationResult.sqlCompilationResults.get(sqlCompilationResultIdx++);
                        if (!!sqlRes) {
                            try {
                                buf += SqlFormatter.format(sqlRes.tokens);
                            } catch (err) {
                                buf += token.text;
                            }
                        } else {
                            buf += token.text;
                        }
                    } else {
                        buf += token.text;
                    }
                    break;
                case MocaLexer.LEFT_PAREN:
                    buf += token.text;
                    parenCounter++;
                    break;
                case MocaLexer.RIGHT_PAREN:
                    buf += token.text;
                    parenCounter--;

                    if (MocaFormatter.isWord(nextToken)) {
                        if (nextToken.type === MocaLexer.AND || nextToken.type === MocaLexer.OR) {
                            buf += ' ';
                        } else {
                            buf += `\n${indentBuf}`;
                        }
                    }

                    break;

                case MocaLexer.LEFT_BRACE:
                    if (!MocaFormatter.tokenAddsNewLine(prevToken)) {
                        buf += `\n${indentBuf}`;
                    }
                    indentBuf += '\t';
                    buf += token.text;
                    buf += `\n${indentBuf}`;

                    break;
                case MocaLexer.RIGHT_BRACE:
                    indentBuf = indentBuf.substring(0, indentBuf.length - 1);
                    buf += `\n${indentBuf}`;
                    buf += token.text;
                    break;

                case MocaLexer.EQUAL:
                case MocaLexer.NOT_EQUAL:
                case MocaLexer.LESS:
                case MocaLexer.GREATER:
                case MocaLexer.LESS_EQUAL:
                case MocaLexer.GREATER_EQUAL:
                    buf += ` ${token.text} `;
                    break;

                case MocaLexer.DIV:
                    buf += ` ${token.text} `;
                    break;
                case MocaLexer.STAR:
                case MocaLexer.MOD:
                case MocaLexer.PLUS:
                    if (prevToken.type === MocaLexer.AT) {
                        buf += token.text;
                    } else {
                        buf += ` ${token.text} `;
                    }

                    break;
                case MocaLexer.MINUS:
                    if (MocaFormatter.isWord(nextToken)) {
                        if (MocaFormatter.isOperator(prevToken) || prevToken.type === MocaLexer.LEFT_PAREN || prevToken.type === MocaLexer.COMMA) {
                            buf += token.text;
                        } else {
                            buf += ` ${token.text} `;
                        }
                    } else if (prevToken.type === MocaLexer.AT) {
                        buf += token.text;
                    } else {
                        buf += ` ${token.text} `;
                    }
                    break;

                case MocaLexer.COMMA:
                    buf += `${token.text} `;
                    break;

                case MocaLexer.DOUBLE_PIPE:
                    buf += ` ${token.text} `;
                    break;

                case MocaLexer.SEMI_COLON:
                    buf += token.text;
                    buf += `\n${indentBuf}`;
                    break;
                case MocaLexer.PIPE:
                    buf += `\n${indentBuf}`;
                    buf += token.text;
                    buf += `\n${indentBuf}`;
                    break;

                case MocaLexer.AMPERSAND:
                    buf += ` ${token.text}`;
                    buf += `\n${indentBuf}`;
                    break;

                case MocaLexer.DOUBLE_GREATER:
                    buf += ` ${token.text} `;
                    break;

                case MocaLexer.WHERE:
                    buf += `\n${indentBuf}`;
                    buf += ` ${token.text} `;
                    break;
                case MocaLexer.AND:

                    if (parenCounter > 0) {
                        buf += ` ${token.text} `;
                    } else {
                        buf += `\n${indentBuf}`;
                        buf += `   ${token.text} `;
                    }

                    break;

                case MocaLexer.IF:
                    if (prevToken.type === MocaLexer.ELSE) {
                        buf += ' ';
                    }
                    buf += `${token.text} `;
                    break;
                case MocaLexer.ELSE:
                    buf += `\n${indentBuf}`;
                    buf += token.text;
                    if (nextToken.type !== MocaLexer.LEFT_BRACE && nextToken.type !== MocaLexer.IF) {
                        buf += `\n${indentBuf}`;
                    }
                    break;

                case MocaLexer.OR:
                    buf += ` ${token.text} `;
                    break;

                case MocaLexer.TRY:
                    buf += `${token.text} `;
                    break;
                case MocaLexer.CATCH:
                    buf += `${token.text} `;
                    break;
                case MocaLexer.FINALLY:
                    buf += ` ${token.text} `;
                    break;

                case MocaLexer.REMOTE:
                case MocaLexer.PARALLEL:
                case MocaLexer.INPARALLEL:
                    buf += token.text;
                    break;

                case MocaLexer.BLOCK_COMMENT:
                    if (MocaFormatter.tokenAddsNewLine(prevToken)) {
                        buf += token.text;
                    } else {
                        buf += `\n${indentBuf}`;
                        buf += token.text;
                    }

                    if (!MocaFormatter.tokenAddsNewLine(nextToken)) {
                        buf += `\n${indentBuf}`;
                    }
                    break;

                default:
                    if (MocaFormatter.isWord(token)) {
                        if (i !== 0 && MocaFormatter.isWord(prevToken)) {
                            buf += ' ';
                        }
                    }
                    buf += token.text;
                    break;
            }
        }

        return buf;
    }

    static formatScript(script: string): string {
        return MocaFormatter.format(MocaCompiler.compile(script));
    }
}

class MocaLanguageUtils {
    static getContextFromPosition(mocaCompilationResult: MocaCompilationResult, pos: Position): 'moca' | 'sql' | 'groovy' {
        for (const embeddedRange of mocaCompilationResult.embeddedRanges) {
            if (RangeUtils.contains(embeddedRange.range, pos)) {
                return embeddedRange.ctx;
            }
        }

        return 'moca';
    }

    static getTokenFromPosition(mocaCompilationResult: MocaCompilationResult, pos: Position): { token: Token, tokenIdx: number } | null {

        if (mocaCompilationResult.tokens.length > 0) {
            let prevToken = mocaCompilationResult.tokens[0];
            let tokenIdx: number;
            for (tokenIdx = 0; tokenIdx < mocaCompilationResult.tokens.length; tokenIdx++) {
                const token = mocaCompilationResult.tokens[tokenIdx];
                if (token.line > pos.lineNumber || (token.line === pos.lineNumber && token.column > pos.column)) {
                    return { token: prevToken, tokenIdx };
                }
                prevToken = token;
            }

            return { token: prevToken, tokenIdx: tokenIdx - 1 };
        }

        return null;
    }
}