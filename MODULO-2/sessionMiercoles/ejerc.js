import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "checkbox",
      name: "frutas",
      message: "Seleccione su fruta favorita",
      choices: ["Manzana", "Banana", "Naranja"],
    },
  ])
  .then((respuesta) => {
    console.log("Frutas seleccionadas: ", respuesta.frutas.join(" , "));
    if (
      respuesta.frutas.includes("Manzana") &&
      respuesta.frutas.includes("Banana")
    ) {
      console.log("Licuado fresco");
    } else if (
      respuesta.frutas.includes("Manzana") &&
      respuesta.frutas.includes("Naranja")
    ) {
      console.log("Licuado acido");
    } else if (
      respuesta.frutas.includes("Banana") &&
      respuesta.frutas.includes("Naranja")
    ) {
      console.log("Licuado jumex");
    } else {
      console.log("Combinacion no disponible");
    }
  });
//M y B: Licuado fresco
//M y N: Licuado acido
//B y N: Licuado jumex
