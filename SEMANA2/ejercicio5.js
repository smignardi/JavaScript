"use strict";

const {
  generarEnteroAleatorio,
  generarNumeroDecimalAleatorio,
} = require("../Utilities/RandomUtilities");

const n = generarEnteroAleatorio(4, 5);

const calcularPromedioPonderado = (cantidadNotas) => {
  const notaActual = generarEnteroAleatorio(0, 20);
  const pesoActual = generarNumeroDecimalAleatorio(0, 1);
  let promedioAcumulado = 0;
  for (let i = 0; i < cantidadNotas; i++) {
    promedioAcumulado = promedioAcumulado + notaActual * pesoActual;
  }
  const pp = promedioAcumulado / cantidadNotas;
  return pp.toFixed(3);
};

const imprimirMensaje = (promedioPonderado) =>
  console.log(`El promedio ponderado es ${promedioPonderado}`);

imprimirMensaje(calcularPromedioPonderado(n));
