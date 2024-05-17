function ejercicio4(rl, menuSeleccion) {
  rl.question("Ingrese un numero ", (numero) => {
    if (numero % 2 === 0) {
      console.log("Es par");
    } else {
      console.log("Es impar");
    }
    rl.close();
    menuSeleccion();
  });
}
module.exports = { ejercicio4 };
