import { CommonTokenStream, ParseTreeWalker, Token } from "antlr4";
import SqlListener from "./antlr/SqlListener.js";
import SqlParser, { Ddl_clauseContext, Delete_statementContext, Full_table_nameContext, Insert_statementContext, Table_nameContext, Update_statementContext } from "./antlr/SqlParser.js";
import { CaseChangingCharStream } from "./utils.js";
import SqlLexer from "./antlr/SqlLexer.js";
import { SyntaxErrorListener } from "./err.js";
import { Range } from "./models.js";


export class SqlCompiler {

    static compile(script: string, range: Range) {
        return new SqlCompilationResult(script, range);
    }
}

export class SqlCompilationResult {

    tokens: Token[];
    parser: SqlParser;
    parseTreeListener: SqlParseTreeListener;
    syntaxErrorListener: SyntaxErrorListener;
    range: Range;

    constructor(script: string, range: Range) {
        this.tokens = new SqlLexer(new CaseChangingCharStream(script, true)).getAllTokens();
        this.parser = new SqlParser(new CommonTokenStream(new SqlLexer(new CaseChangingCharStream(script, true))));
        this.parser.removeErrorListeners();
        this.syntaxErrorListener = new SyntaxErrorListener();
        this.parser.addErrorListener(this.syntaxErrorListener);

        let parseTree = this.parser.sql_script();
        this.parseTreeListener = new SqlParseTreeListener();
        new ParseTreeWalker().walk(this.parseTreeListener, parseTree);
        this.range = range;
    }

    hasSyntaxErrors() {
        return this.syntaxErrorListener.syntaxErrors.length > 0;
    }

    hasActions() {
        return this.parseTreeListener.action;
    }
}

export class SqlParseTreeListener extends SqlListener {

    tableTokens: Token[];
    action: boolean;

    constructor() {
        super();

        this.tableTokens = [];
        this.action = false;

        this.enterFull_table_name = ((ctx: Full_table_nameContext) => {
            if (!!ctx && !!ctx.stop) {
                this.tableTokens.push();
            }
        });

        this.enterTable_name = ((ctx: Table_nameContext) => {
            if (!!ctx && !!ctx.stop) {
                this.tableTokens.push(ctx.stop);
            }
        });

        this.enterDdl_clause = ((ctx: Ddl_clauseContext) => {
            if (!!ctx) {
                this.action = true;
            }
        });

        this.enterDelete_statement = ((ctx: Delete_statementContext) => {
            if (!!ctx) {
                this.action = true;
            }
        });

        this.enterUpdate_statement = ((ctx: Update_statementContext) => {
            if (!!ctx) {
                this.action = true;
            }
        });

        this.enterInsert_statement = ((ctx: Insert_statementContext) => {
            if (!!ctx) {
                this.action = true;
            }
        });
    }
}

export class SqlLanguageUtils {
    static isSql(str: string): boolean {
        if (!!str.match(/\b(select|update|delete|insert|create|alter|drop|with)\b/gmi)) {
            return true;
        }
        return false;
    }
}

export class SqlFormatter {

    private static isWord(token: Token) {
        switch (token.type) {
            case SqlLexer.STRING:
            case SqlLexer.DOUBLE_QUOTE_ID:
                return false;
            default:
                break;
        }

        if (!!token.text.match(/[a-zA-Z_0-9]+/gmi)) {
            return true;
        } else {
            switch (token.type) {
                case SqlLexer.MOCA_AT_STAR:
                case SqlLexer.AT:
                    return true;
                default:
                    return false;
            }
        }
    }

    private static isOperator(token: Token) {
        switch (token.type) {
            case SqlLexer.EQUAL:
            case SqlLexer.NOT_EQUAL:
            case SqlLexer.LESS:
            case SqlLexer.GREATER:
            case SqlLexer.LESS_EQUAL:
            case SqlLexer.GREATER_EQUAL:
            case SqlLexer.STAR:
            case SqlLexer.DIVIDE:
            case SqlLexer.MODULE:
            case SqlLexer.PLUS:
            case SqlLexer.MINUS:
            case SqlLexer.PLUS_ASSIGN:
            case SqlLexer.MINUS_ASSIGN:
            case SqlLexer.MULT_ASSIGN:
            case SqlLexer.DIV_ASSIGN:
            case SqlLexer.MOD_ASSIGN:
            case SqlLexer.AND_ASSIGN:
            case SqlLexer.XOR_ASSIGN:
            case SqlLexer.OR_ASSIGN:
            case SqlLexer.BIT_AND:
            case SqlLexer.BIT_OR:
            case SqlLexer.LIKE:
                return true;
            default:
                return false;
        }
    }

    private static addNewline(buf: string, queryStack: Query[]) {
        buf += '\n';
        for (const query of queryStack) {
            buf += query.clauseIndentBuf;
            buf += query.subqueryIndentBuf;
        }
    }

    private static tokenWillAddNewline(token: Token) {
        switch (token.type) {
            case SqlLexer.COMMA:
            case SqlLexer.FROM:
            case SqlLexer.WHERE:
            case SqlLexer.AND:
            case SqlLexer.OR:
            case SqlLexer.INNER:
            case SqlLexer.RIGHT:
            case SqlLexer.OUTER:
            case SqlLexer.CROSS:
            case SqlLexer.JOIN:
            case SqlLexer.FULL:
            case SqlLexer.LEFT:
            case SqlLexer.ON:
            case SqlLexer.GROUP:
            case SqlLexer.ORDER:
            case SqlLexer.HAVING:
            case SqlLexer.UNION:
            case SqlLexer.ALL:
            case SqlLexer.SET:
            case SqlLexer.INTO:
            case SqlLexer.VALUES:
            case SqlLexer.TABLE:
            case SqlLexer.ADD:
            case SqlLexer.DROP:
            case SqlLexer.ALTER:
            case SqlLexer.MODIFY:
            case SqlLexer.WHEN:
            case SqlLexer.END:
            case SqlLexer.COMMENT:
                return true;
            default:
                return false;
        }
    }

    static format(_tokens: Token[]): string {

        // Need to copy existing list into new list for processing. Reason is that we do
        // not want to modify the token list being passed in since other processes
        // could be using it.
        let tokens: Token[] = [];
        // Do not copy in whitespace tokens.
        for (const token of _tokens) {
            if (token.type !== SqlLexer.SPACE) {
                tokens.push(token);
            }
        }

        let buf = '';
        let queryStack: Query[] = [];
        let parenCounter = 0;
        let inCaseWhen = false;
        let isDDL = false;
        let token: Token;
        let prevToken: Token | null = null;
        let nextToken: Token | null = null;
        let curQuery: Query;

        queryStack.push(new Query(parenCounter));

        // Whitespace dealt with; process formatting.
        // Code is pretty self-explanatory -- just look at each condition for specifics.
        for (let i = 0; i < tokens.length; i++) {

            token = tokens[i];

            if (i > 0) {
                prevToken = tokens[i - 1];
            }

            if (i < tokens.length - 1) {
                nextToken = tokens[i + 1];
            }

            curQuery = queryStack[queryStack.length - 1];

            let tokenText = token.text;

            switch (token.type) {

                case SqlLexer.LR_BRACKET:

                    buf += (tokenText);
                    parenCounter++;

                    if (nextToken != null && nextToken.type == SqlLexer.SELECT) {

                        let query = new Query(parenCounter);

                        let prevIndentSpaceCount = 0;
                        for (const _query of queryStack) {
                            prevIndentSpaceCount += (_query.subqueryIndentBuf.length
                                + _query.clauseIndentBuf.length);
                        }

                        for (let j = buf.length - 1 - prevIndentSpaceCount; j >= 0; j--) {
                            if (buf.charAt(j) == '\n') {
                                break;
                            } else {
                                query.subqueryIndentBuf += (' ');
                            }
                        }

                        queryStack.push(query);
                    }

                    break;
                case SqlLexer.RR_BRACKET:

                    if (parenCounter == curQuery.parenCounterState) {
                        queryStack.pop();
                    }

                    parenCounter--;

                    buf += (tokenText);

                    if (nextToken != null && SqlFormatter.isWord(nextToken)) {
                        buf += (' ');
                    }

                    break;

                case SqlLexer.COMMA:

                    if (parenCounter > curQuery.parenCounterState) {

                        if (isDDL) {
                            buf += (tokenText);
                            SqlFormatter.addNewline(buf, queryStack);
                        } else {
                            buf += (tokenText);
                            buf += (' ');
                        }
                    } else {
                        buf += (tokenText);

                        SqlFormatter.addNewline(buf, queryStack);
                    }

                    break;

                case SqlLexer.EQUAL:
                case SqlLexer.NOT_EQUAL:
                case SqlLexer.LESS:
                case SqlLexer.GREATER:
                case SqlLexer.LESS_EQUAL:
                case SqlLexer.GREATER_EQUAL:
                case SqlLexer.BIT_AND:
                case SqlLexer.BIT_OR:
                case SqlLexer.LIKE:
                    buf += (' ');
                    buf += (tokenText);
                    buf += (' ');
                    break;

                case SqlLexer.MINUS:
                    if (nextToken != null && SqlFormatter.isWord(nextToken)) {
                        if (prevToken != null
                            && (SqlFormatter.isOperator(prevToken) || prevToken.type == SqlLexer.LR_BRACKET
                                || prevToken.type == SqlLexer.COMMA)) {
                            buf += (tokenText);
                        } else {
                            buf += (' ');
                            buf += (tokenText);
                            buf += (' ');
                        }
                    } else {
                        buf += (' ');
                        buf += (tokenText);
                        buf += (' ');
                    }
                    break;

                case SqlLexer.STAR:
                    if (prevToken != null && (prevToken.type == SqlLexer.DOT
                        || prevToken.type == SqlLexer.LR_BRACKET)) {
                        buf += (tokenText);
                    } else {
                        buf += (' ');
                        buf += (tokenText);
                        buf += (' ');
                    }
                    break;

                case SqlLexer.DIVIDE:
                case SqlLexer.MODULE:
                case SqlLexer.PLUS:
                case SqlLexer.PLUS_ASSIGN:
                case SqlLexer.MINUS_ASSIGN:
                case SqlLexer.MULT_ASSIGN:
                case SqlLexer.DIV_ASSIGN:
                case SqlLexer.MOD_ASSIGN:
                case SqlLexer.AND_ASSIGN:
                case SqlLexer.XOR_ASSIGN:
                case SqlLexer.OR_ASSIGN:
                    buf += (' ');
                    buf += (tokenText);
                    buf += (' ');
                    break;

                case SqlLexer.DOUBLE_BAR:
                    buf += (' ');
                    buf += (tokenText);
                    buf += (' ');
                    break;

                case SqlLexer.SELECT:

                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    if (prevToken != null) {
                        if (prevToken.type == SqlLexer.RR_BRACKET) {
                            buf += ('\n');
                        }
                    }

                    buf += (tokenText);

                    break;

                case SqlLexer.FROM:

                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    buf += (tokenText);

                    break;

                case SqlLexer.WHERE:

                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    buf += (tokenText);

                    break;

                case SqlLexer.AND:

                    if (!inCaseWhen || curQuery.parenCounterState == parenCounter) {
                        curQuery.clauseIndentBuf = '';
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');

                        SqlFormatter.addNewline(buf, queryStack);

                        buf += (tokenText);
                    } else {
                        if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                            buf += (' ');
                        }
                        buf += (tokenText);
                    }

                    break;
                case SqlLexer.OR:

                    if (!inCaseWhen || curQuery.parenCounterState == parenCounter) {
                        curQuery.clauseIndentBuf = '';
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');

                        SqlFormatter.addNewline(buf, queryStack);

                        buf += (tokenText);
                    } else {
                        if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                            buf += (' ');
                        }
                        buf += (tokenText);
                    }

                    break;

                case SqlLexer.INNER:
                case SqlLexer.RIGHT:
                case SqlLexer.OUTER:
                case SqlLexer.CROSS:

                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    buf += (tokenText);

                    break;

                case SqlLexer.JOIN:
                case SqlLexer.FULL:
                case SqlLexer.LEFT:

                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    buf += (tokenText);

                    break;

                case SqlLexer.ON:

                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    buf += (tokenText);

                    break;

                case SqlLexer.GROUP:
                case SqlLexer.ORDER:

                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    buf += (tokenText);

                    break;

                case SqlLexer.BY:
                    buf += (' ');
                    buf += (tokenText);
                    break;

                case SqlLexer.HAVING:

                    curQuery.clauseIndentBuf = '';

                    SqlFormatter.addNewline(buf, queryStack);

                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    buf += (tokenText);

                    break;

                case SqlLexer.UNION:

                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    buf += (tokenText);

                    if (nextToken != null && nextToken.type == SqlLexer.ALL) {
                        buf += (' ');
                    } else {
                        SqlFormatter.addNewline(buf, queryStack);
                    }

                    break;

                case SqlLexer.ALL:

                    buf += (tokenText);
                    SqlFormatter.addNewline(buf, queryStack);

                    break;

                case SqlLexer.SET:
                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    buf += (tokenText);
                    break;

                case SqlLexer.INTO:
                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    buf += (tokenText);
                    break;
                case SqlLexer.VALUES:
                    curQuery.clauseIndentBuf = '';

                    SqlFormatter.addNewline(buf, queryStack);

                    buf += (tokenText);
                    break;

                case SqlLexer.TABLE:
                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    buf += (tokenText);
                    break;

                case SqlLexer.ADD:
                    curQuery.clauseIndentBuf = '';
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    SqlFormatter.addNewline(buf, queryStack);

                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    buf += (tokenText);
                    break;

                case SqlLexer.DROP:
                    isDDL = true;

                    if (nextToken != null && nextToken.type == SqlLexer.COLUMN) {
                        curQuery.clauseIndentBuf = '';
                        curQuery.clauseIndentBuf += (' ');

                        SqlFormatter.addNewline(buf, queryStack);

                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');

                        buf += (tokenText);
                    } else {
                        if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                            buf += (' ');
                        }

                        buf += (tokenText);
                    }

                    break;

                case SqlLexer.ALTER:
                    isDDL = true;

                    if (nextToken != null && nextToken.type == SqlLexer.COLUMN) {
                        curQuery.clauseIndentBuf = '';

                        SqlFormatter.addNewline(buf, queryStack);

                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');
                        curQuery.clauseIndentBuf += (' ');

                        buf += (tokenText);
                    } else {
                        if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                            buf += (' ');
                        }

                        buf += (tokenText);
                    }

                    break;

                case SqlLexer.MODIFY:
                    isDDL = true;

                    curQuery.clauseIndentBuf = '';

                    SqlFormatter.addNewline(buf, queryStack);

                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    buf += (tokenText);
                    break;

                case SqlLexer.CREATE:
                    isDDL = true;

                    if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                        buf += (' ');
                    }

                    buf += (tokenText);
                    break;

                case SqlLexer.CASE:

                    inCaseWhen = true;

                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');
                    curQuery.clauseIndentBuf += (' ');

                    if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                        buf += (' ');
                    }

                    buf += (tokenText);
                    break;
                case SqlLexer.WHEN:
                    SqlFormatter.addNewline(buf, queryStack);

                    if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                        buf += (' ');
                    }

                    buf += (tokenText);
                    break;
                case SqlLexer.END:

                    curQuery.clauseIndentBuf = curQuery.clauseIndentBuf.substring(0, curQuery.clauseIndentBuf.length - 3);

                    SqlFormatter.addNewline(buf, queryStack);

                    if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                        buf += (' ');
                    }

                    buf += (tokenText);

                    inCaseWhen = false;
                    break;

                case SqlLexer.COMMENT:

                    if (prevToken == null || (prevToken != null && SqlFormatter.tokenWillAddNewline(prevToken))) {
                        if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                            buf += (' ');
                        }
                        // Reason for replacement in token text here is due to the MocaFormatter indent
                        // buffer. When injecting formatted mocasql code into [...], we need to take
                        // moca indent buffer into account so that the mocasql can fit into the moca
                        // script correctly. Since we do not worry about formatting internal text of a
                        // comment, we need to make sure that the indent buffer does not continue
                        // pushing comment internal text out further and further. This seems weird, but
                        // it works -- this is the only place in mocasql formatting that we do something
                        // like this.
                        buf += (tokenText.replace("\n ", "\n"));
                    } else {
                        SqlFormatter.addNewline(buf, queryStack);
                        buf += (tokenText);
                    }

                    if (nextToken != null && !SqlFormatter.tokenWillAddNewline(nextToken)) {
                        SqlFormatter.addNewline(buf, queryStack);
                    }
                    break;
                case SqlLexer.LINE_COMMENT:
                    if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                        buf += (' ');
                    }
                    buf += (tokenText);

                    if (nextToken != null && !SqlFormatter.tokenWillAddNewline(nextToken)) {
                        SqlFormatter.addNewline(buf, queryStack);
                    }
                    break;

                default:
                    if (SqlFormatter.isWord(token)) {

                        if (prevToken != null && SqlFormatter.isWord(prevToken)) {

                            // Not ideal, but we are having some issues formatting moca integration
                            // variables.
                            // In order to deal with this, let's explictly check for a word with a ":i_" in
                            // front of it.
                            if (prevToken.text.toLowerCase() === ':i_') {
                                buf += (' ');
                            }
                        }

                        buf += (tokenText);

                    } else {

                        // We do not classify double quote or string as 'word', so we need to have some
                        // extra analysis to create the asthetic we are looking for regarding these
                        // tokens.
                        if (token.type == SqlLexer.DOUBLE_QUOTE_ID || token.type == SqlLexer.STRING) {
                            if (prevToken != null && SqlFormatter.isWord(prevToken)) {
                                buf += (' ');
                                buf += (tokenText);

                            } else {
                                buf += (tokenText);
                            }

                            if (nextToken != null && SqlFormatter.isWord(nextToken)) {
                                buf += (' ');
                            }

                        } else {
                            buf += (tokenText);
                        }
                    }
                    break;
            }
        }

        return buf.toString();
    }
}

class Query {
    clauseIndentBuf: string;
    subqueryIndentBuf: string;
    parenCounterState: number;

    constructor(parenCounter: number) {
        this.clauseIndentBuf = '';
        this.subqueryIndentBuf = '';
        this.parenCounterState = parenCounter;
    }
}
