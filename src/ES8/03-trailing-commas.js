/**
 * CLASE 20 : ES8: string padding y trailing commas
 * 
 * Trailing commas -> consiste en agregar comas (,) al final de un objeto o arreglo y que facilite añadir nuevos elementos y evitar errores de sintaxis.
 */

//creo un arreglo de numeros.
const edades = [24, 32, 18, 25, 24, , , ,];

console.log(edades);
console.log(edades.length);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// [ 24, 32, 18, 25, 24, <3 empty items> ]
// 8

//si veo los valores reales del arreglo son 5, pero al agregar comas, ES8 me detecta las posiciones sobrantes y las asigna como posiciones vacias.


//Se puede crear una estructura con elementos vacios en medio
const numeros = [1, 2, , , , 6, 7, 8];

console.log(numeros);
console.log(numeros.length);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// [ 1, 2, <3 empty items>, 6, 7, 8 ]
// 8