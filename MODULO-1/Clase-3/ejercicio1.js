/*Determinar si un número ingresado por el usuario es positivo, negativo o si es
cero.*/
function determinarNoP(n) {
  if (n > 0) {
    return "positivo";
  } else if (n < 0) {
    return "negativo";
  } else {
    return "cero";
  }
}
function ejercicio1(rl, menuSeleccion) {
  rl.question("Ingrese un número: ", (n) => {
    const signo = determinarNoP(parseFloat(n));
    console.log(`El número es ${signo}`);
    rl.close();
    menuSeleccion();
  });
}

module.exports = { ejercicio1 };
