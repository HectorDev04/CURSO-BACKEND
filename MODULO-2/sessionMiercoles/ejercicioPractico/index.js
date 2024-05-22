import inquirer from "inquirer";

const verificarEdad = [
  {
    type: "input",
    name: "nombre",
    message: "Ingrese su nombre",
  },
  {
    type: "number",
    name: "edad",
    message: "Ingrese su edad",
  },
];

const solicitarCredenciales = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "correo",
      message: "Ingrese su correo electronico",
    },
    {
      type: "password",
      name: "contraseña",
      message: "Ingrese su contraseña",
      mask: "*",
    },
  ]);
};

let credencialesGuardadas = {};

inquirer.prompt(verificarEdad).then((respuestas) => {
  const { nombre, edad } = respuestas;
  if (edad >= 18) {
    console.log(`Hola ${nombre}, eres mayor de edad.`);
    solicitarCredenciales().then((credenciales) => {
      credencialesGuardadas = credenciales;
      verificarCredenciales();
    });
  } else {
    console.log(`Hola ${nombre}, eres menor de edad.`);
  }
});

const verificarCredenciales = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "correoIngresado",
        message: "Ingrese su correo electrónico",
      },
      {
        type: "password",
        name: "contraseñaIngresada",
        message: "Ingrese su contraseña",
        mask: "*",
      },
    ])
    .then((credencialesIngresadas) => {
      if (
        credencialesIngresadas.correoIngresado ===
          credencialesGuardadas.correo &&
        credencialesIngresadas.contraseñaIngresada ===
          credencialesGuardadas.contraseña
      ) {
        console.log("Inicio de sesion exitoso. ¡Bienvenido!");
      } else {
        console.log("Credenciales incorrectas. Verifique sus credenciales.");
        verificarCredenciales();
      }
    });
};
