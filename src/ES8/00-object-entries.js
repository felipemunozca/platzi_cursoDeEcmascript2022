/**
 *  CLASE 19: ES8: object entries y object values
 * 
 * Object.entries() -> devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 */

//creo un objeto, con la estructura llave-valor.
const paises = { MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};
//Utilizo la palabra reservada Object junto al metodo entries() para convertir el objeto "paises" en un arreglo.
console.log(Object.entries(paises));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// [
//     [ 'MX', 'Mexico' ],
//     [ 'CO', 'Colombia' ],
//     [ 'CL', 'Chile' ],
//     [ 'PE', 'Peru' ]
// ]

