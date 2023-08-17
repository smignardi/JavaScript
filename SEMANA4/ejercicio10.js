"use strcit";

const listaNumeros = require("../files/listaPosiblesCapicua.json");

const invertirArray = (arr) => {
  const arrayInvertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrayInvertido.push(arr[i]);
  }

  return arrayInvertido;
};

const esCapicua = (arr1, arr2) => {
  let isCapicua = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      isCapicua = false;
    }
  }
  return isCapicua == true ? "SI" : "NO";
};

const imprimirMensaje = (answer) => {
  console.log(`El array de JSON ${answer} es capicua`);
};

const arrayinvertido = invertirArray(listaNumeros);
imprimirMensaje(esCapicua(listaNumeros, arrayinvertido));
