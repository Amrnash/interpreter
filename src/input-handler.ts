import { Utils } from "./utils";

export class InputHandler {
  private position: number = 0;
  public readPosition: number = 0;
  public char: string = "";

  constructor(private input: string) {
    this.readChar();
  }

  readChar() {
    if (this.readPosition >= this.input.length) this.char = "eof";
    else this.char = this.input[this.readPosition];
    this.position = this.readPosition;
    this.readPosition += 1;
  }

  peekChar() {
    if (this.readPosition >= this.input.length) return "eof";
    else {
      return this.input[this.readPosition];
    }
  }
  skipWhitespace() {
    while (
      this.char === " " ||
      this.char === "\n" ||
      this.char === "\t" ||
      this.char === "\r"
    ) {
      this.readChar();
    }
  }

  readNumber() {
    let num = "";
    while (Utils.isDigit(this.char)) {
      num += this.char;
      this.readChar();
    }
    return num;
  }

  readIdentifier() {
    let ident = "";
    while (Utils.isLetter(this.char)) {
      ident += this.char;
      this.readChar();
    }
    return ident;
  }
}
