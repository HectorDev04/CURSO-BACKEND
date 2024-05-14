function ejercicio5(rl, menuSeleccion) {
  rl.question("Ingrese el primer color ", (color1) => {
    rl.question("Ingrese el segundo color ", (color2) => {
      if (color1 === "azul" && color2 === "amarillo") {
        console.log("El color es verde");
      } else if (color1 === "azul" && color2 === "rojo") {
        console.log("El color es morado");
      } else if (color1 === "rojo" && color2 === "amarillo") {
        console.log("El color es naranja");
      } else {
        console.log("Error, esa combinacion de colores no esta disponible");
      }
      rl.close();
      menuSeleccion();
    });
  });
}
module.exports = { ejercicio5 };
