"use strict";
const notasAlumnos = require("../files/personas.json");

const estaAprobado = (nota) => {
  return nota > 11 ? "APROBADO" : "DESAPROBADO";
};

const imprimirReporte = () => {
  for (let i = 0; i < notasAlumnos.length; i++) {
    console.log(
      `NOMBRE: ${notasAlumnos[i].nombre} NOTA: ${
        notasAlumnos[i].nota
      } ${estaAprobado(notasAlumnos[i].nota)}`
    );
  }
};

imprimirReporte();
