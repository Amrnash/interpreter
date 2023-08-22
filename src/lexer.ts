import { Token, TokenType } from "./types/token";
import { keywords } from "./types/token";
import { Utils } from "./utils";
import { InputHandler } from "./input-handler";

export class Lexer {
  constructor(private inputHandler: InputHandler) {}

  private lookupIdentifierType(identifier: string) {
    if (keywords[identifier as keyof typeof keywords]) {
      return keywords[identifier as keyof typeof keywords];
    } else {
      return TokenType.INDENTIFIER;
    }
  }
  nextToken() {
    let token: Token | null = null;
    this.inputHandler.skipWhitespace();
    this.inputHandler.readChar();
    switch (this.inputHandler.char) {
      case "=":
        token = new Token(TokenType.ASSIGN, "=");
        break;
      case ";":
        token = new Token(TokenType.SEMICOLON, ";");
        break;
      case "(":
        token = new Token(TokenType.LPAREN, "(");
        break;
      case ")":
        token = new Token(TokenType.RPAREN, ")");
        break;
      case "{":
        token = new Token(TokenType.LBRACE, "{");
        break;
      case "}":
        token = new Token(TokenType.RBRACE, "}");
        break;
      case ",":
        token = new Token(TokenType.COMMA, ",");
        break;
      case "+":
        token = new Token(TokenType.PLUS, "+");
        break;
      default:
        if (Utils.isLetter(this.inputHandler.char)) {
          const identifier = this.inputHandler.readIdentifier();
          const type = this.lookupIdentifierType(identifier);
          token = new Token(type, identifier);
        } else if (Utils.isDigit(this.inputHandler.char)) {
          const number = this.inputHandler.readNumber();
          const type = TokenType.INTEGER;
          token = new Token(type, number);
        } else {
          token = new Token(TokenType.ILLIGAL, this.inputHandler.char);
        }
    }
    return token;
  }
}
