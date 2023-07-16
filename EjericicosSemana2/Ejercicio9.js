"use strict";

const { generarEnteroAleatorio } = require("../Utilities/RandomUtilities");

function calcularFactorial(numero) {
  let valorFactorial = 1;
  for (let i = 1; i <= numero; i++) {
    valorFactorial = valorFactorial * i;
  }
  return valorFactorial;
}

function imprimirResultado(valor, resultado) {
  console.log(`El factorial de ${valor} es ${resultado}`);
}

let times = 0;
while (times != 5) {
  let numAleatorio = generarEnteroAleatorio(5, 10);
  imprimirResultado(numAleatorio, calcularFactorial(numAleatorio));
  times++;
}
