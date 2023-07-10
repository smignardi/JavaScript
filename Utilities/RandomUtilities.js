function generarNumeroDecimalAleatorio(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  generarNumeroDecimalAleatorio,
  generarEnteroAleatorio,
};
