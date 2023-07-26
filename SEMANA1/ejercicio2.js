"user strict";

const {
  generarNumeroDecimalAleatorio,
} = require("../Utilities/RandomUtilities");

const cateto1 = generarNumeroDecimalAleatorio(1, 10).toFixed(1);
const cateto2 = generarNumeroDecimalAleatorio(1, 10).toFixed(1);

const calcularHipotenusa = (num1, num2) =>
  Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2)).toFixed(4);

const hipotenusa = calcularHipotenusa(cateto1, cateto2);

const imprimirMensaje = (cat1, cat2, hipotenusa) =>
  console.log(
    `El triangulo de catetos ${cat1} y ${cat2} tiene una hipotenusa de ${hipotenusa}`
  );

imprimirMensaje(cateto1, cateto2, hipotenusa);
