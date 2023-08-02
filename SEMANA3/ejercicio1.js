"use strict";

const { generarEnteroAleatorio } = require("../UTILITIES/RandomUtilities");
const {
  generarArrayAleatorio,
  sumaArray,
  restaArrays,
  multiplicacionArrays,
} = require("../UTILITIES/arrayUtilities");

const lengthArreglos = generarEnteroAleatorio(10, 20);
const array1 = generarArrayAleatorio(lengthArreglos, 100, 200);
const array2 = generarArrayAleatorio(lengthArreglos, 2, 6);

const sumaArr = sumaArray(array1, array2);
const restaArr = restaArrays(array1, array2);
const multiplicacionArr = multiplicacionArrays(array1, array2);

console.log(array1);
console.log(array2);
console.log(sumaArr);
console.log(restaArr);
console.log(multiplicacionArr);
