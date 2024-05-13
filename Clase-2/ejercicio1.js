function contarPalabras(array) {
  let contadorPalabras = {};
  array.forEach((cadena) => {
    let palabras = cadena.split(/\s+/);
    palabras.forEach((palabras) => {
      if (contadorPalabras[palabras]) {
        contadorPalabras[palabras]++;
      } else {
        contadorPalabras[palabras] = 1;
      }
    });
  });
  return contadorPalabras;
}
let palabrasArray = [
  "Hola buenos dias",
  "Hola buenas tardes",
  "Hola buenas noches",
];
let resultado = contarPalabras(palabrasArray);
console.log(resultado);
