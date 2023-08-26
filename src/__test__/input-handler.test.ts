import { InputHandler } from "../input-handler";

describe("InputHandler", () => {
  it("readChar() method should get a sequence, character by character from input", () => {
    const handler = new InputHandler("hello");

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
    const handler = new InputHandler("  h   e   l   l   o; ");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.char).toBe("h");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.char).toBe("e");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.char).toBe("l");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.char).toBe("l");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.char).toBe("o");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.char).toBe(";");
  });

  it("readNumber() should return the next number in the input, and returns empty string otherwise", () => {
    const handler = new InputHandler(" 51232   123 w");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.readNumber()).toBe("51232");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.readNumber()).toBe("123");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.readNumber()).toBe("");
  });

  it("readIdentifier() should return the next identifier in the input, and returns empty string otherwise", () => {
    const handler = new InputHandler(" let   hello 2");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.readIdentifier()).toBe("let");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.readIdentifier()).toBe("hello");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.readIdentifier()).toBe("");
  });

  it("readIdentifier() should return the next identifier in the input, and returns empty string otherwise", () => {
    const handler = new InputHandler("let num = 5;");

    expect(handler.readIdentifier()).toBe("let");

    handler.skipWhitespace();
    expect(handler.readIdentifier()).toBe("num");

    handler.readChar();
    expect(handler.char).toBe("=");

    handler.readChar();
    handler.skipWhitespace();
    expect(handler.readNumber()).toBe("5");

    expect(handler.char).toBe(";");
  });
});
