const palabra1 = "hola";
const palabra2 = "aloha";
const palabra3 = "computadora";

function concatenarCadenas(word1, word2, word3) {
  return word1 + " " + word2 + " " + word3 + " fin";
}

const cadenaConcatenada = concatenarCadenas(palabra1, palabra2, palabra3);

function imprimirMensaje(palabra1, palabra2, palabra3, palabra4) {
  console.log(concatenarCadenas(palabra1, palabra2, palabra3));
}

imprimirMensaje(palabra1, palabra2, palabra3);
