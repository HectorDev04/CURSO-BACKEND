function ejercicio2(rl, menuSeleccion) {
  rl.question("Ingrese el primer numero: ", (n1) => {
    rl.question("Ingrese el segundo numero: ", (n2) => {
      rl.question("Ingrese el tercer numero: ", (n3) => {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        n3 = parseFloat(n3);

        if (n1 > n2 && n1 > n3) {
          console.log("El primer numero es el mayor: " + n1);
        } else if (n2 > n1 && n2 > n3) {
          console.log("El segundo numero es el mayor: " + n2);
        } else if (n3 > n1 && n3 > n2) {
          console.log("El tercer numero es el mayor: " + n3);
        } else {
          console.log("Al menos dos numeros son iguales");
        }
        rl.close();
        menuSeleccion();
      });
    });
  });
}
module.exports = { ejercicio2 };
