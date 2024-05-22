import { suma, resta } from "./funciones.js";

const resultSuma = suma(10, 2);
const resultResta = resta(8, 1);

console.log(`El resultado de la suma es: ${resultSuma}`);
console.log(`El resultado de la resta es: ${resultResta}`);

// const fs = require("fs");
// const formatoFecha = require("./funciones");

// const hoy = new Date();
// const formateo = formatoFecha(hoy);

// fs.writeFileSync("fecha.text", `La fecha de hoy es: ${formateo}`);
// console.log("La fecha se ha guardado");
// const persona = require("./funciones");
// const persona1 = new persona('Hector', 20);
// persona1.saludo();

// // const { agregar, restar } = require("./funciones");

// // const resultado = agregar(5, 3);
// // console.log(`El resultado de la suma es: ${resultado}`);
// // const residuo = restar(5, 2);
// // console.log(`El resultado de la resta es: ${residuo}`);
