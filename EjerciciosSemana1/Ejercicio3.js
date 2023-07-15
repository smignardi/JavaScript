const {
  generarNumeroDecimalAleatorio,
} = require("../Utilities/RandomUtilities");

const lado = generarNumeroDecimalAleatorio(5, 500).toFixed(1);

function calcularPerimetro(lado) {
  return (lado * 3).toFixed(1);
}

function calcularArea(lado) {
  return ((Math.sqrt(3) / 4) * Math.pow(lado, 2)).toFixed(1);
}

const perimetro = calcularPerimetro(lado);
const area = calcularArea(lado);

function imprimirMensaje(lado, perimetro, area) {
  console.log(
    `El perímetro de un triángulo equilátero de lado ${lado} es ${perimetro}`
  );
  console.log(`El área de un triángulo equilátero de lado ${lado} es ${area}`);
}

imprimirMensaje(lado, perimetro, area);
