const { generarEnteroAleatorio } = require("../Utilities/RandomUtilities");

function calcularNumCabezas(vacas, gallinas) {
  return vacas + gallinas;
}

function calcularNumPatas(vacas, gallinas) {
  return vacas * 4 + gallinas * 2;
}

const vacas = generarEnteroAleatorio(1, 5);
const gallinas = generarEnteroAleatorio(1, 5);

const numCabezas = calcularNumCabezas(vacas, gallinas);
const numPatas = calcularNumPatas(vacas, gallinas);

function imprimirMensaje(vacas, gallinas, cabezas, patas) {
  console.log(
    `En ${vacas} vacas & ${gallinas} gallinas hay ${cabezas} cabezas`
  );
  console.log(`En ${vacas} vacas & ${gallinas} gallinas hay ${patas} patas`);
}

imprimirMensaje(vacas, gallinas, numCabezas, numPatas);
