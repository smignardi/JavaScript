const {
  generarNumeroDecimalAleatorio,
} = require("../Utilities/RandomUtilities");

const peso = generarNumeroDecimalAleatorio(50, 100).toFixed(3);
const altura = generarNumeroDecimalAleatorio(1.5, 2.0).toFixed(3);

function calcularIMC(altura, peso) {
  return peso / Math.pow(altura, 2);
}

const imc = calcularIMC(altura, peso).toFixed(2);

function imprimirMensaje(peso, altura, imc) {
  console.log(
    `Para el peso ${peso} kg y la altura de ${altura} m se tiene un IMC de ${imc}`
  );
}

imprimirMensaje(peso, altura, imc);
