function ejercicio3(rl, menuSeleccion) {
  rl.question("Ingrese un numero ", (numero) => {
    let resultado = 1;
    for (let i = 1; i <= parseFloat(numero); i++) {
      resultado *= i;
      console.log("El factorial es: " + resultado);
    }
    rl.close();
    menuSeleccion();
  });
}
module.exports = { ejercicio3 };
