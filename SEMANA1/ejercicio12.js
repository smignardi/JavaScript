"user strict";

const { generarEnteroAleatorio } = require("../Utilities/RandomUtilities");

const calcularNumCabezas = (vacas, gallinas) => vacas + gallinas;

const calcularNumPatas = (vacas, gallinas) => vacas * 4 + gallinas * 2;

const vacas = generarEnteroAleatorio(1, 5);
const gallinas = generarEnteroAleatorio(1, 5);

const numCabezas = calcularNumCabezas(vacas, gallinas);
const numPatas = calcularNumPatas(vacas, gallinas);

const imprimirMensaje = (vacas, gallinas, cabezas, patas) => {
  console.log(
    `En ${vacas} vacas & ${gallinas} gallinas hay ${cabezas} cabezas`
  );
  console.log(`En ${vacas} vacas & ${gallinas} gallinas hay ${patas} patas`);
};

imprimirMensaje(vacas, gallinas, numCabezas, numPatas);
