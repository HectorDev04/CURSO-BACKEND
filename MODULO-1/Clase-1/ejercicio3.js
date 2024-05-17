const readline = require("readline");
const { text } = require("stream/consumers");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese una cadena de texto ", (texto) => {
  console.log("Texto en mayuscula: " + texto.toUpperCase());
  rl.close();
});
