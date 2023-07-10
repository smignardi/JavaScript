const {
  generarNumeroDecimalAleatorio,
} = require("../Utilities/RandomUtilities");

const cateto1 = generarNumeroDecimalAleatorio(1, 10).toFixed(1);
const cateto2 = generarNumeroDecimalAleatorio(1, 10).toFixed(1);

function calcularHipotenusa(num1, num2) {
  return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2)).toFixed(4);
}

const hipotenusa = calcularHipotenusa(cateto1, cateto2);

console.log(
  `El triangulo de catetos ${cateto1} y ${cateto2} tiene una hipotenusa de ${hipotenusa}`
);
