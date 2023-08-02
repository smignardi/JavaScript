"use strict";

const { generarEnteroAleatorio } = require("../UTILITIES/RandomUtilities");
const { generarArrayAleatorio } = require("../UTILITIES/arrayUtilities");

const arrayLen = generarEnteroAleatorio(100, 200);
const arrayNumeros = generarArrayAleatorio(arrayLen, 10, 1000);

const arrayCapicua = [];
const arrayNoCapicua = [];

const esCapicua = (num) => {
  var numStr = String(num);
  var reversedNumStr = numStr.split("").reverse().join("");
  return numStr === reversedNumStr;
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
