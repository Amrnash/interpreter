import { InputHandler } from "../input-handler";

describe("InputHandler", () => {
  it("readChar() method should get a sequence, character by character from input", () => {
    const handler = new InputHandler("hello");

    handler.readChar();
    expect(handler.char).toBe("h");

    handler.readChar();
    expect(handler.char).toBe("e");

    handler.readChar();
    expect(handler.char).toBe("l");

    handler.readChar();
    expect(handler.char).toBe("l");

    handler.readChar();
    expect(handler.char).toBe("o");
  });

  it("skipWhiteSpace() ignores all sorts of spaces in input when called", () => {
    const handler = new InputHandler("  h   e   l   l   o ");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.char).toBe("h");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.char).toBe("e");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.char).toBe("l");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.char).toBe("l");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.char).toBe("o");
  });

  it("readNumber() should return the next number in the input, and returns empty string otherwise", () => {
    const handler = new InputHandler(" 51232   123 w");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.readNumber()).toBe("51232");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.readNumber()).toBe("123");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.readNumber()).toBe("");
  });

  it("readIdentifier() should return the next identifier in the input, and returns empty string otherwise", () => {
    const handler = new InputHandler(" let   hello 2");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.readIdentifier()).toBe("let");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.readIdentifier()).toBe("hello");

    handler.skipWhitespace();
    handler.readChar();
    expect(handler.readIdentifier()).toBe("");
  });
});
