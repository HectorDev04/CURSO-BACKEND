let persona = [
  { nombre: "Sonia", edad: 33, ciudad: "Santa Tecla" },
  { nombre: "Martha", edad: 35, ciudad: "San Salvador" },
  { nombre: "sergio", edad: 50, ciudad: "San Salvador" },
  { nombre: "Marleni", edad: 25, ciudad: "San Miguel" },
];
function filtrarPersonas(personaObejeto, ciudad) {
  return personaObejeto.filter(
    (persona) => persona.edad > 30 && persona.ciudad === ciudad
  );
}
let personasFiltradas = filtrarPersonas(persona, "San Salvador");
console.log(personasFiltradas);
