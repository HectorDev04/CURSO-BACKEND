const { error } = require("console");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "pruebasbackend321@hotmail.com",
    pass: "backend1",
  },
});
let mailOptions = {
  from: "pruebasbackend321@hotmail.com",
  to: "pruebasbackend321@hotmail.com",
  subject: "Implementación de servidor de correos",
  text: "¡Servidor de correo funcionando excelente!",
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error al enviar el correo: ", error);
  }
  console.log("Correo electronico enviado con exito: ", info.response);
});
