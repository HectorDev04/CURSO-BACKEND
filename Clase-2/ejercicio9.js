let listaCompras = {
  Sandia: 5,
  Melocoton: 4,
  Fresas: 3,
  Manzanas: 3,
};

function generarListaCompras(listaCompras) {
  let listaLegible = "Lista de compras: \n";

  for (let elemento in listaCompras) {
    listaLegible += `${elemento} : ${listaCompras[elemento]} unidades\n`;
  }
  return listaLegible;
}

let listaLegible = generarListaCompras(listaCompras);
console.log(listaLegible);
