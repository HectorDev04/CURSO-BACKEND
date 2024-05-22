import inquirer from "inquirer";

const pregunta = [
  {
    type: "input",
    name: "nombre",
    message: "Digame su nombre",
  },
  {
    type: "confirm",
    name: "confirmacion",
    message: "Seguro ese es el nombre?",
  },
  {
    type: "list",
    name: "colores",
    message: "Cual es tu color favorito",
    choices: ["Rojo", "Azul", "Verde", "Negro"],
  },
  {
    type: "checkbox",
    name: "intereses",
    message: "Selecciona una opcion de interes",
    choices: ["Programacion", "Diseño", "Base de datos", "Redes"],
  },
  {
    type: "password",
    name: "contraseña",
    message: "Ingrese su contraseña: ",
    mask: "‎ ",
  },
];
inquirer.prompt(pregunta).then((respuesta) => {
  if (respuesta.confirmacion) {
    console.log("Confimacion exitosa");
    console.log(`Hola ${respuesta.nombre}`);
    console.log(`Tu color favorito es: ${respuesta.colores}`);
    console.log(`Tus intereses son: ${respuesta.intereses.join(" , ")}`);
    console.log(`Su contraseña es: ${respuesta.contraseña}`);
  } else {
    console.log("No se confirmo el nombre");
  }
});
