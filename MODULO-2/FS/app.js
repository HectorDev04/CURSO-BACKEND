const fs = require("fs");
//EJERCICIO 6

//EJERCICIO 1
// fs.readFile("archivo.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error al leer el archivo ", err);
//   } else {
//     console.log("CONTENIDO DEL ARCHIVO ", data);
//   }
// });

//EJERCICIO 2
// const contenido = "Este es el nuevo contenido";
// fs.writeFile("archivo.txt", contenido, (err) => {
//   if (err) {
//     console.log("Error al abrir el archivo ");
//   } else {
//     console.log("El archivo esta escrito ");
//   }
// });

//EJERCICIO 3
// const archivo = "archivo.txt";
// const contenidAgregado = "\n Este es un contenido agregado";
// fs.appendFile(archivo, contenidAgregado, (err) => {
//   if (err) {
//     console.log("Error al agregar el contenido ");
//   } else {
//     console.log("Contenido agregado ");
//   }
// });

// EJERCICIO 4
// const ruta = "C:/Users/HectorDev/desktop/xd.txt";
// fs.readFile(ruta, "utf8", (err, data) => {
//   if (err) {
//     console.log("Error al leer el archivo ", err);
//   } else {
//     console.log("El archivo esta leido ", data);
//   }
// });

//EJERCICIO 5
// const path = require("path");
// const readline = require("readline");
// const documentos = path.join(
//   process.env.Home || process.env.USERPROFILE,
//   "Documents"
// );
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Nombre de la carpeta a crear ", (carpeta) => {
//   const nuevaCarpeta = path.join(documentos, carpeta);
//   fs.mkdir(nuevaCarpeta, { recursive: true }, (err) => {
//     if (err) {
//       console.error("Error al crear la carpeta");
//     } else {
//       console.log("Carpeta creada exitosamente");
//     }
//   });
//   rl.close();
// });
