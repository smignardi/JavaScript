"use strict";

const {
  generarNumeroDecimalAleatorio,
} = require("../Utilities/RandomUtilities");

const calcularSoles = (usd) => usd * 3.9;

const calcularEuros = (usd) => usd * 0.99;

const calcularYenes = (usd) => usd * 145.66;

const calcularYuan = (usd) => usd * 7.25;

const calcularRupias = (usd) => usd * 15637.8;

const cantidadUsd = generarNumeroDecimalAleatorio(100, 200).toFixed(1);

const usdSoles = calcularSoles(cantidadUsd);
const usdEuros = calcularEuros(cantidadUsd);
const usdYenes = calcularYenes(cantidadUsd);
const usdYuan = calcularYuan(cantidadUsd);
const usdRupias = calcularRupias(cantidadUsd);

const imprimirMensaje = () => {
  console.log(`El equivalente de ${cantidadUsd} USD en Soles es ${usdSoles}`);
  console.log(`El equivalente de ${cantidadUsd} USD en Euros es ${usdEuros}`);
  console.log(`El equivalente de ${cantidadUsd} USD en Yenes es ${usdYenes}`);
  console.log(`El equivalente de ${cantidadUsd} USD en Yuan es ${usdYuan}`);
  console.log(`El equivalente de ${cantidadUsd} USD en Rupias es ${usdRupias}`);
};

imprimirMensaje();
