let estudiante = [
  { nombre: "Maria", edad: 24 },
  { nombre: "Karla", edad: 19 },
  { nombre: "Anahi", edad: 21 },
];

let profesores = [
  { nombre: "Maritza", Materia: "Matematicas" },
  { nombre: "Citlaly", Materia: "Lenguaje" },
  { nombre: "Kristal", Materia: "Ciencias" },
];

function combinarObjetos(a, b) {
  let comunidadEducativa = [...a, ...b];
  return comunidadEducativa;
}

let comunidad = combinarObjetos(estudiante, profesores);

console.log(comunidad);
