"use strict";

const { generarEnteroAleatorio } = require("../UTILITIES/RandomUtilities");
const { generarArrayAleatorio } = require("../UTILITIES/arrayUtilities");

const arrayLen = generarEnteroAleatorio(15, 20);
const arrayNumeros = generarArrayAleatorio(arrayLen, 100, 999);

console.log(arrayNumeros);

const calcularMediaGeometrica = (arr) => {
  let acumulado = 1;
  for (let i = 0; i < arrayLen; i++) {
    acumulado *= arr[i];
  }
  return Math.pow(acumulado, 1 / arrayLen).toFixed(5);
};

const imprimirMensaje = (mediaGeo) => {
  console.log(`${mediaGeo} es el resultado de la media geometrica`);
};

imprimirMensaje(calcularMediaGeometrica(arrayNumeros));
