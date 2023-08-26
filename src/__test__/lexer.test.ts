import { Lexer } from "../lexer";
import { Token, TokenType } from "../types/token";
import { InputHandler } from "../input-handler";

describe("Lexer", () => {
  it("nextToken() should recognize symbols { ( ) } + = , ; and return corresponding token type", () => {
    const inputHandler = new InputHandler("{()}+=,;");
    const lexer = new Lexer(inputHandler);

    expect(lexer.nextToken()).toEqual(new Token(TokenType.LBRACE, "{"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.LPAREN, "("));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.RPAREN, ")"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.RBRACE, "}"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.PLUS, "+"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.ASSIGN, "="));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.COMMA, ","));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.SEMICOLON, ";"));
  });

  it("nextToken() should recognize symbols - ! * / < > and return corresponding token type", () => {
    const inputHandler = new InputHandler("- !*/<>");
    const lexer = new Lexer(inputHandler);

    expect(lexer.nextToken()).toEqual(new Token(TokenType.MINUS, "-"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.BANG, "!"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.ASTRISK, "*"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.SLASH, "/"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.LT, "<"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.GT, ">"));
  });

  it("nextToken() should recognize identifiers, numbers and keywords", () => {
    const input = "let num = 5;";
    const inputHandler = new InputHandler(input);
    const lexer = new Lexer(inputHandler);

    expect(lexer.nextToken()).toEqual(new Token(TokenType.LET, "let"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.INDENTIFIER, "num"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.ASSIGN, "="));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.INTEGER, "5"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.SEMICOLON, ";"));
  });

  it("nextToken() should recognize if and return keywords", () => {
    const input = "if (5 < 10) {" + "return true;}";
    const inputHandler = new InputHandler(input);
    const lexer = new Lexer(inputHandler);

    expect(lexer.nextToken()).toEqual(new Token(TokenType.IF, "if"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.LPAREN, "("));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.INTEGER, "5"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.LT, "<"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.INTEGER, "10"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.RPAREN, ")"));

    expect(lexer.nextToken()).toEqual(new Token(TokenType.LBRACE, "{"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.RETURN, "return"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.TRUE, "true"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.SEMICOLON, ";"));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.RBRACE, "}"));
  });

  it("nextToken() should recognize == and != operators", () => {
    const input = "== !=";
    const inputHandler = new InputHandler(input);
    const lexer = new Lexer(inputHandler);

    expect(lexer.nextToken()).toEqual(new Token(TokenType.EQUAL, "=="));
    expect(lexer.nextToken()).toEqual(new Token(TokenType.NOTEQUAL, "!="));
  });
});
