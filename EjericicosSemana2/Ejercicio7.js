"use strict";

const {
  generarNumeroDecimalAleatorio,
} = require("../Utilities/RandomUtilities");

function calcularSoles(usd) {
  return usd * 3.9;
}

function calcularEuros(usd) {
  return usd * 0.99;
}

function calcularYenes(usd) {
  return usd * 145.66;
}

function calcularYuan(usd) {
  return usd * 7.25;
}

function calcularRupias(usd) {
  return usd * 15637.8;
}

const cantidadUsd = generarNumeroDecimalAleatorio(100, 200).toFixed(1);

const usdSoles = calcularSoles(cantidadUsd);
const usdEuros = calcularEuros(cantidadUsd);
const usdYenes = calcularYenes(cantidadUsd);
const usdYuan = calcularYuan(cantidadUsd);
const usdRupias = calcularRupias(cantidadUsd);

function imprimirMensaje() {
  console.log(`El equivalente de ${cantidadUsd} USD en Soles es ${usdSoles}`);
  console.log(`El equivalente de ${cantidadUsd} USD en Euros es ${usdEuros}`);
  console.log(`El equivalente de ${cantidadUsd} USD en Yenes es ${usdYenes}`);
  console.log(`El equivalente de ${cantidadUsd} USD en Yuan es ${usdYuan}`);
  console.log(`El equivalente de ${cantidadUsd} USD en Rupias es ${usdRupias}`);
}

imprimirMensaje();
