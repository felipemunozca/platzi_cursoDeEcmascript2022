/**
 * CLASE 19: ES8: object entries y object values
 * 
 * Object.value() -> devuelve un arreglo con los valores correspondientes a las propiedades enumerables de un objeto.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 */

//creo un objeto con valores de diferentes paises.
const paises = { MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};
console.log(Object.values(paises));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// [ 'Mexico', 'Colombia', 'Chile', 'Peru' ]

//la respuesta en la consola muestra los valores, sin las llaves, es decir, se crea un nuevo arreglo solo de string.