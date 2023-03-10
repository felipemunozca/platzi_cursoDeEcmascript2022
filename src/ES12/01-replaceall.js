/**
 * CLASE 31: ES12: numeric-separators y replaceAll
 * 
 * replaceAll() -> es un método que retorna un nuevo string, reemplazando todos los elementos por otro que haya definido.
 * Este método recibe dos argumentos:
 *      El primer valor que se le pasa es el que se va a buscar en el texto.
 *      El segundo valor sera el nuevo elemento que sustituye al que estoy buscando.
 */

const string = 'JavaScript es un maravilloso lenguaje de  programacion.';
const reemplazarString = string.replace("JavaScript", "TypeScript");
console.log(reemplazarString);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// TypeScript es un maravilloso lenguaje de  programacion.
