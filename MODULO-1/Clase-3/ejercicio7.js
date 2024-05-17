function ejercicio7(rl, menuSeleccion) {
  rl.question("Ingrese una categoría: ", (categoria) => {
    let typeVehiculo = "";
    switch (categoria.toLowerCase()) {
      case "moto":
        console.log("Moto ninja");
        break;
      case "auto":
        console.log("Auto deportivo");
        break;
      case "camion":
        console.log("Camion monstruo");
        break;
      case "bicicleta":
        console.log("Bicicleta de carreras");
        break;
      default:
        console.log("Categoría no disponible");
        break;
    }
    rl.close();
    menuSeleccion();
  });
}

module.exports = { ejercicio7 };
