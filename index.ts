import readLine from "node:readline/promises";
import { Lexer } from "./src/lexer";
import { InputHandler } from "./src/input-handler";
import { Token, TokenType } from "./src/types/token";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function main() {
  rl.on("line", (line) => {
    const inputHandler = new InputHandler(line);
    const lexer = new Lexer(inputHandler);

    while (lexer.inputHandler.char !== "eof") {
      console.log(lexer.nextToken());
    }
  });
}

main();
