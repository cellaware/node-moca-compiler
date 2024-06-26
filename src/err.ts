import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";


export interface SyntaxError {
    lineNumber: number;
    column: number;
    msg: string;
    token: Token;
}

export class SyntaxErrorListener extends ErrorListener<Token> {

    syntaxErrors: SyntaxError[];

    constructor() {
        super();
        this.syntaxErrors = [];
    }

    override syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, lineNumber: number, column: number, msg: string, e: RecognitionException | undefined): void {
        this.syntaxErrors.push({ lineNumber, column, msg, token: offendingSymbol });
    }
}