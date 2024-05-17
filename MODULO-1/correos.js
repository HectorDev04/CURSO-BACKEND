const { error } = require("console");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "hectorrodriguezzzz1527@outlook.com",
    pass: "",
  },
});
let mailOptions = {
  from: "hectorrodriguezzzz1527@outlook.com",
  to: "j.william03@hotmail.com",
  subject: "Implementación de servidor de correos",
  text: "¡Servidor de correo funcionando excelente! Hector Rodriguez",
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error al enviar el correo: ", error);
  }
  console.log("Correo electronico enviado con exito: ", info.response);
});
