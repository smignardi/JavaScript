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

console.log(
  `En ${vacas} vacas & ${gallinas} gallinas hay ${numCabezas} cabezas`
);
console.log(`En ${vacas} vacas & ${gallinas} gallinas hay ${numPatas} patas`);
