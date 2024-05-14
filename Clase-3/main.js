const { ejercicio1 } = require("./ejercicio1.js");
const { ejercicio2 } = require("./ejercicio2.js");
const { ejercicio3 } = require("./ejercicio3.js");
const { ejercicio4 } = require("./ejercicio4.js");
const { ejercicio5 } = require("./ejercicio5.js");
const { ejercicio6 } = require("./ejercicio6.js");
const { ejercicio7 } = require("./ejercicio7.js");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menuSeleccion() {
  console.log("0. Salir");
  console.log("1. Ejercicio 1");
  console.log("2. Ejercicio 2");
  console.log("3. Ejercicio 3");
  console.log("4. Ejercicio 4");
  console.log("5. Ejercicio 5");
  console.log("6. Ejercicio 6");
  console.log("7. Ejercicio 7");
}

function preguntarOpcion() {
  rl.question("Seleccione una opción: ", (opcion) => {
    opcion = parseInt(opcion);

    switch (opcion) {
      case 0:
        console.log("Salir");
        rl.close();
        break;
      case 1:
        console.log("Ejercicio 1");
        ejercicio1(rl, menuSeleccion);
        break;
      case 2:
        console.log("Ejercicio 2");
        ejercicio2(rl, menuSeleccion);
        break;
      case 3:
        console.log("Ejercicio 3");
        ejercicio3(rl, menuSeleccion);
        break;
      case 4:
        console.log("Ejercicio 4");
        ejercicio4(rl, menuSeleccion);
        break;
      case 5:
        console.log("Ejercicio 5");
        ejercicio5(rl, menuSeleccion);
        break;
      case 6:
        console.log("Ejercicio 6");
        ejercicio6(rl, menuSeleccion);
        break;
      case 7:
        console.log("Ejercicio 7");
        ejercicio7(rl, menuSeleccion);
        break;
      default:
        console.log("Opción inválida");
        break;
    }

    if (opcion !== 0) {
      preguntarOpcion();
    }
  });
}

menuSeleccion();
preguntarOpcion();
