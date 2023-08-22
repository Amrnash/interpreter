import { Utils } from "./utils";

export class InputHandler {
  private currentPosition: number = 0;
  private forwardPosition: number = 0;
  private _char: string;

  constructor(private input: string) {
    this._char = "";
  }

  get char() {
    return this._char;
  }
  readChar() {
    if (this.forwardPosition >= this.input.length) this._char = "";
    else this._char = this.input[this.forwardPosition];
    this.currentPosition = this.forwardPosition;
    this.forwardPosition++;
  }

  skipWhitespace() {
    this.readChar();
    while (
      this._char === " " ||
      this._char === "\n" ||
      this._char === "\t" ||
      this._char === "\r"
    ) {
      this.readChar();
    }
    this.currentPosition--;
    this.forwardPosition--;
  }

  readNumber() {
    let num = "";
    while (Utils.isDigit(this._char)) {
      num += this._char;
      this.readChar();
    }
    return num;
  }
  readIdentifier() {
    let indent = "";
    while (Utils.isLetter(this._char)) {
      indent += this._char;
      this.readChar();
    }
    return indent;
  }
}
