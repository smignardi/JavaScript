"use strict";

const { generarEnteroAleatorio } = require("../utilities/RandomUtilities");
const { generarArrayAleatorio } = require("../utilities/arrayUtilities");

const arrayLen = generarEnteroAleatorio(100, 200);
const arrayNumeros = generarArrayAleatorio(arrayLen, 10, 1000);

const arrayCapicua = [];
const arrayNoCapicua = [];

const esCapicua = (num) => {
  let numero = String(num);
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] !== numero[numero.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
};

const poblarArrays = (arr, arrCapi, arrNoCapi) => {
  for (let i = 0; i < arrayLen; i++) {
    if (esCapicua(arr[i])) {
      arrayCapicua.push(arr[i]);
    } else {
      arrayNoCapicua.push(arr[i]);
    }
  }
};

const mostrarMensaje = (arrCapi, arrayNoCapi) => {
  console.log(arrCapi);
  console.log(arrayNoCapi);
  console.log(`El array original tiene ${arrCapi.length} números capicua`);
  console.log(
    `El array original tiene ${arrayNoCapi.length} números no capicua`
  );
};

poblarArrays(arrayNumeros, arrayCapicua, arrayNoCapicua);

mostrarMensaje(arrayCapicua, arrayNoCapicua);
