import { Lexer } from "../lexer";
import { Token, TokenType } from "../types/token";
import { InputHandler } from "../input-handler";

describe("Lexer", () => {
  it("nextToken() should recognize symbols { ( ) } + = , ; and return corresponding token type", () => {
    const inputHandler = new InputHandler("{(}+=");
    const lexer = new Lexer(inputHandler);
    expect(lexer.nextToken()).toEqual(new Token(TokenType.LBRACE, "{"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.LPAREN, "("));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.RBRACE, "}"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.PLUS, "+"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.ASSIGN, "="));
  });

  it("nextToken() should recognize identifiers and keywords", () => {
    const input = "let num = 5;";
    const inputHandler = new InputHandler(input);
    const lexer = new Lexer(inputHandler);

    expect(lexer.nextToken()).toEqual(new Token(TokenType.LET, "let"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.INDENTIFIER, "num"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.ASSIGN, "="));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.INTEGER, "5"));
  });
});
