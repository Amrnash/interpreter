export enum TokenType {
  ILLIGAL = "ILLIGAL",
  EOF = "EOF",
  INDENTIFIER = "IDENTIFIER",
  INTEGER = "INTEGER",
  ASSIGN = "=",
  PLUS = "+",
  COMMA = ",",
  SEMICOLON = ";",
  LPAREN = "(",
  RPAREN = ")",
  LBRACE = "{",
  RBRACE = "}",
  FUNCTION = "FUNCTION",
  LET = "LET",
}

export class Token {
  constructor(private type: TokenType, private literal: string) {}
}

export const keywords = {
  fn: TokenType.FUNCTION,
  let: TokenType.LET,
};
