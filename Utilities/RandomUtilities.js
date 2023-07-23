/**
 *
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
function generarNumeroDecimalAleatorio(min, max) {
  return Math.random() * (max - min + 1) + min;
}

/**
 *
 * @param {*} min
 * @param {*} max
 * @returns
 */
function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  generarNumeroDecimalAleatorio,
  generarEnteroAleatorio,
};
