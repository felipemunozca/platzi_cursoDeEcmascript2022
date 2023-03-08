/**
 * CLASE 25: ES10: try catch y fromEntries
 * 
 * Object.fromEntries() -> metodo que permite transformar un arreglo de arreglos en un objeto.
 */

//creo una constante la cual sera igual a un arreglo dentro de un arreglo
const entradas = new Map([["nombre", "Felipe"], ["edad", 32]]);
console.log(entradas);
console.log(Object.fromEntries(entradas));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Map(2) { 'nombre' => 'Felipe', 'edad' => 32 }
// { nombre: 'Felipe', edad: 32 }