const readline = require("readline");
function Saludar(nombre) {
  console.log("Hola " + nombre);
}

function procesarNombre(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Porfavor ingresa tu nombre ", (nombre) => {
    callback(nombre);
    rl.close;
  });
}
procesarNombre(Saludar);
