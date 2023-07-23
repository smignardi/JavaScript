"use strict";

const { generarEnteroAleatorio } = require("../Utilities/RandomUtilities");

const n = generarEnteroAleatorio(15, 30);

const calcularMediaArmonica = (totalNum) => {
  let valorMediaArmonica = 0;
  let numAleatorioActual = 0;
  for (let i = 0; i < totalNum; i++) {
    numAleatorioActual = generarEnteroAleatorio(10, 20);
    valorMediaArmonica = valorMediaArmonica + 1 / numAleatorioActual;
  }
  return (totalNum / valorMediaArmonica).toFixed(5);
};

const imprimirMensaje = (n, valorMediaArmonica) =>
  console.log(
    `La media armonica es ${valorMediaArmonica} para un valor de N de ${n}`
  );

imprimirMensaje(n, calcularMediaArmonica(n));
