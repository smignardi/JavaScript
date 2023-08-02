"use strict";

const { generarEnteroAleatorio } = require("../UTILITIES/RandomUtilities");
const { generarArrayAleatorio } = require("../UTILITIES/arrayUtilities");

const lengthArray = generarEnteroAleatorio(20, 30);
const arrayNumeros = generarArrayAleatorio(lengthArray, 100, 1000);
const arrayPesos = generarArrayAleatorio(lengthArray, 1, 50);

const calcularPromedioPonderado = (a1, a2) => {
  let promedioPonderado = 0;
  let aux = 0;
  for (let i = 0; i < lengthArray; i++) {
    aux = aux + a1[0] * a2[0];
  }
  promedioPonderado = aux / lengthArray;
  return promedioPonderado;
};

const imprimirMensaje = (array1, array2, pp) => {
  console.log(array1);
  console.log(array2);
  console.log(`Promedio ponderado: ${pp}`);
};

console.log("aea");
imprimirMensaje(
  arrayNumeros,
  arrayPesos,
  calcularPromedioPonderado(arrayNumeros, arrayPesos)
);
