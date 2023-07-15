"user strict";

const {
  generarNumeroDecimalAleatorio,
} = require("../Utilities/RandomUtilities");

const radio = generarNumeroDecimalAleatorio(1, 5).toFixed(2);

function calcularPerimetro(radio) {
  return (2 * Math.PI * radio).toFixed(1);
}

function calcularArea(radio) {
  return (Math.PI * Math.pow(radio, 2)).toFixed(1);
}

const perimetro = calcularPerimetro(radio);
const area = calcularArea(radio);

function imprimirMensaje(radio, perimetro, area) {
  console.log(
    `Con un radio de ${radio} m se obtiene un perimetro ${perimetro} metros`
  );
  console.log(
    `Con un radio de ${radio} m se obtiene un area de ${area} metros cuadrados`
  );
}

imprimirMensaje(radio, perimetro, area);
