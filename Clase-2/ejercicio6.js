let persona = [
  { nombre: "Hector", edad: 20, genero: "masculino" },
  { nombre: "Kevin", edad: 20, genero: "masculino" },
  { nombre: "Carlos", edad: 20, genero: "masculino" },
];
function buscarporNombre(arrayPersona, nombre) {
  return arrayPersona.find((objeto) => objeto.nombre === nombre);
}
let personaBuscada = buscarporNombre(persona, "Hector");
console.log(persona);
