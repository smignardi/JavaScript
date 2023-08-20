"use strict";

const { bblSort } = require("../utilities/arrayUtilities");
const listaVideojuegos = require("../files/videojuegos.json");

const ordenarArray = (arr) => {
  return listaVideojuegos.juegos.sort((a, b) => a.precio - b.precio);
};

const imprimirReporte = (lista) => {
  console.log(lista);
};

ordenarArray(listaVideojuegos);

imprimirReporte(listaVideojuegos);
