/**
 * CLASE 31: ES12: numeric-separators y replaceAll
 * 
 * Los separadores numericos nos ayudaran a tener una lectura mas amigable de cifras con numeros.
 * La gran ventaja es que al usar un separador, por ejemplo un guion bajo _ el numero en si se mantiene igual, podras ver esto al imprimirlo en consola.
 */

//creo una variable con un valor gigante cien mil millones.
const valor = 100000000000;
//creo una nueva variable, utilizando el mismo numero pero separando las unidades con guiones bajos.
const valorSeparado = 100_000_000_000;
console.log(valor);
console.log(valorSeparado);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// 100000000000
// 100000000000
