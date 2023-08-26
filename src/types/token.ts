export enum TokenType {
  ILLIGAL = "ILLIGAL",
  EOF = "EOF",
  INDENTIFIER = "IDENTIFIER",
  INTEGER = "INTEGER",
  ASSIGN = "=",
  EQUAL = "==",
  NOTEQUAL = "!=",
  PLUS = "+",
  COMMA = ",",
  MINUS = "-",
  BANG = "!",
  ASTRISK = "*",
  SLASH = "/",
  LT = "<",
  GT = ">",
  SEMICOLON = ";",
  LPAREN = "(",
  RPAREN = ")",
  LBRACE = "{",
  RBRACE = "}",
  FUNCTION = "FUNCTION",
  LET = "LET",
  TRUE = "TRUE",
  FALSE = "FALSE",
  IF = "IF",
  ELSE = "ELSE",
  RETURN = "RETURN",
}

export class Token {
  constructor(private type: TokenType, private literal: string) {}
}

export const keywords = {
  fn: TokenType.FUNCTION,
  let: TokenType.LET,
  true: TokenType.TRUE,
  false: TokenType.FALSE,
  if: TokenType.IF,
  else: TokenType.ELSE,
  return: TokenType.RETURN,
};
