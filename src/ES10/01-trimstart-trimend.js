/**
 * CLASE 24: ES10: flat-map y trimStart-trimEnd
 * 
 * Los metodos trim sirven para eliminar espacios en blanco de un string.
 * trim() -> elimina los espacios en blanco al inicio y al final.
 * trimStart() o trimLeft() -> elimina los espacios al inicio.
 * trimEnd() o trimRight() -> elimina los espacios al final.
 */

//creo una constante y le asigno un mensaje con espacios vacios adelante y atras.
const saludo = '        Hola Mundo!       ';
console.log(saludo.trimStart());
console.log(saludo.trimEnd());
console.log(saludo.trim());
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Hola Mundo!       
//         Hola Mundo!
// Hola Mundo!