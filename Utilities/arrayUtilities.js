"use strict";

const { generarEnteroAleatorio } = require("../UTILITIES/RandomUtilities");

/**
 *
 * @param {*} length
 * @param {*} min
 * @param {*} max
 * @returns
 */
const generarArrayAleatorio = (length, min, max) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(generarEnteroAleatorio(min, max));
  }
  return array;
};

/**
 *
 * @param {*} array1
 * @param {*} array2
 * @returns
 */
const sumaArray = (array1, array2) => {
  const arraySuma = [];
  const arraysLength = array1.length;
  for (let i = 0; i < arraysLength; i++) {
    arraySuma.push(array1[i] + array2[i]);
  }
  return arraySuma;
};

/**
 *
 * @param {*} array1
 * @param {*} array2
 * @returns
 */
const restaArrays = (array1, array2) => {
  const arraySuma = [];
  const arraysLength = array1.length;
  for (let i = 0; i < arraysLength; i++) {
    arraySuma.push(array1[i] - array2[i]);
  }
  return arraySuma;
};

/**
 *
 * @param {*} array1
 * @param {*} array2
 * @returns
 */
const multiplicacionArrays = (array1, array2) => {
  const arraySuma = [];
  const arraysLength = array1.length;
  for (let i = 0; i < arraysLength; i++) {
    arraySuma.push(array1[i] * array2[i]);
  }
  return arraySuma;
};

/**
 *
 * @param {*} array
 * @returns
 */
const bblSort = (array) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return array;
};

module.exports = {
  generarArrayAleatorio,
  sumaArray,
  restaArrays,
  multiplicacionArrays,
  bblSort,
};
