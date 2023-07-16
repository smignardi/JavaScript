"use strict";

const {} = require("../Utilities/RandomUtilities");

const num1 = 121;
const num2 = 335533;
const num3 = 741;
const num4 = 321;

let aux = 0;
let inverso = 0;

function calcularInversa(numero) {
  aux = numero;
  inverso = 0;

  while (aux != 0) {
    inverso = 10 * inverso + (aux % 10);
    aux = Math.floor(aux / 10);
  }
  return inverso;
}

function verificarCapicua(numeroOriginal, numeroInvertido) {
  if (numeroOriginal === numeroInvertido) {
    return "si";
  } else return "no";
}

function imprimirMensaje(numeroOriginal, numeroInvertido, capicauaValidation) {
  console.log(
    `La inversa de ${numeroOriginal} es ${numeroInvertido} y por ende ${capicauaValidation} es capicua`
  );
}

imprimirMensaje(
  num1,
  calcularInversa(num1),
  verificarCapicua(num1, calcularInversa(num1))
);

imprimirMensaje(
  num2,
  calcularInversa(num2),
  verificarCapicua(num2, calcularInversa(num2))
);

imprimirMensaje(
  num3,
  calcularInversa(num3),
  verificarCapicua(num3, calcularInversa(num3))
);

imprimirMensaje(
  num4,
  calcularInversa(num4),
  verificarCapicua(num4, calcularInversa(num4))
);
