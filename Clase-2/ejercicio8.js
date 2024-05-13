function validarObjeto(objeto) {
  const propiedades = ["nombre", "direccion", "telefono"];

  for (let propiedad of propiedades) {
    if (objeto.hasOwnProperty(propiedad)) {
      let mjs = "Objeto Aprobado";
      return mjs;
    } else {
      let mjs = "Objeto NO Aprobado";
      return mjs;
    }
  }
}

let cliente = { nombre: "Hector", direccion: "San Miguel", telefono: 78928293 };
console.log(validarObjeto(cliente));
