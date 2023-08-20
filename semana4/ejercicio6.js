"use strict";

const listaNumeros = require("../files/listaNumbers.json");
const calcularPromedioSimple = (lista) => {
  let acumulado = 0;
  for (let i = 0; i < lista.length; i++) {
    acumulado = acumulado + lista[i];
  }
  return acumulado / lista.length;
};

const imprimirMensaje = (valor) => {
  console.log(`Promedio Simple : ${valor}`);
};

imprimirMensaje(calcularPromedioSimple(listaNumeros));
