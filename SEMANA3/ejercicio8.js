"use strict";

const { generarEnteroAleatorio } = require("../utilities/RandomUtilities");
const { generarArrayAleatorio } = require("../utilities/arrayUtilities");

const arrayLen = generarEnteroAleatorio(15, 20);
const arrayNumeros = generarArrayAleatorio(arrayLen, 10, 1000);

const arrayPrimos = [];
const arrayNoPrimos = [];

const esPrimo = (num) => {
  for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const poblarArrays = (arr, arrPrimos, arrNoPrim) => {
  for (let i = 0; i < arrayLen; i++) {
    if (esPrimo(arr[i])) {
      arrPrimos.push(arr[i]);
    } else {
      arrNoPrim.push(arr[i]);
    }
  }
};

const mostrarMensaje = (arrPrim, arrayNoPrim) => {
  console.log(arrPrim);
  console.log(arrayNoPrim);
  console.log(`El array original tiene ${arrPrim.length} números primos`);
  console.log(
    `El array original tiene ${arrayNoPrim.length} números no primos`
  );
};

poblarArrays(arrayNumeros, arrayPrimos, arrayNoPrimos);

mostrarMensaje(arrayPrimos, arrayNoPrimos);
