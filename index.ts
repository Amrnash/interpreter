import { InputHandler } from "./src/input-handler";
import { Lexer } from "./src/lexer";
const input = "let num = 5;  let add = fn (x , y) { x + y}  !-/* 5 < 10 > 5";
const handler = new InputHandler(input);
const lexer = new Lexer(handler);

console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());

console.log(lexer.nextToken());
// console.log(lexer.nextToken());
// handler.readChar();
// console.log(handler.char);
