/**
 *  CLASE 24: ES10: flat-map y trimStart-trimEnd
 * 
 * Primero hay que entender el concepto "aplanamiento". 
 * Consiste en transformar un arreglo de arreglos a una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.
 * flat() -> devuelve un arreglo donde los sub-arreglos han sido propagados hasta una profundidad especificada.
 * flatMap() -> es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos del arreglo (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).
 * 
 * nos devuelve una matriz de cualquier sub matriz.
 */

//flat
//creo un arreglo con dos arreglos dentros (arreglo de arreglos.)
//NOTA IMPORTANTE: los sub arreglos tambien se separan con comas ,
//el numero 3 simboliza la profundidad.
const arreglo = [1,1,2,3,2,3, [4,4,5,6, [9,8,7]]];
console.log(arreglo.flat(3));


//flatMap
const arreglo2 = [1,2,3,4,5,6];
//creo una funcion flecha para rescatar cada valor del arreglo y multiplacarlo x2.
console.log(arreglo2.flatMap(value => [value * 2]));
//creo una funcion flecha para imprimir cada valor del arreglo y para multiplicar cada valor x2.
console.log(arreglo2.flatMap(value => [value, value * 2]));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// [ 2, 4, 6, 8, 10, 12 ]
// [
//   1,  2, 2, 4,  3,
//   6,  4, 8, 5, 10,
//   6, 12
// ]