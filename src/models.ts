
// Data maps directed to monaco-editor Position
export interface Position {
    /**
     * line number (starts at 1)
     */
    lineNumber: number; // Line number starts at 1
    /**
     * column (the first character in a line is between column 1 and column 2)
     */
    column: number;
};

export function initPosition(lineNumber: number, column: number): Position {
    return { lineNumber, column };
}

// Data maps directed to monaco-editor  Range
export interface Range {
    /**
     * Line number on which the range starts (starts at 1).
     */
    startLineNumber: number;
    /**
     * Column on which the range starts in line `startLineNumber` (starts at 1).
     */
    startColumn: number;
    /**
     * Line number on which the range ends.
     */
    endLineNumber: number;
    /**
     * Column on which the range ends in line `endLineNumber`.
     */
    endColumn: number;
};

export function initRange(startLineNumber: number, startColumn: number, endLineNumber: number, endColumn: number): Range {
    return { startLineNumber, startColumn, endLineNumber, endColumn };
}

export interface Change {
    range: Range;
    rangeLength: number;
    rangeOffset: number;
    text: string;
};

export interface EmbeddedRange {
    id: number;
    ctx: 'moca' | 'sql' | 'groovy';
    range: Range;
    startOffset: number;
    stopOffset: number;
    text: string;
    compiled: boolean;
}

export interface VerbNounClauseKey {
    id: number;
    verbNounClause: string;
}