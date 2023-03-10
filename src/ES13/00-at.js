/**
 * CLASE 33: ES13: at
 * 
 * at() -> metodo que sirve para acceder a los elementos de un arreglo a partir del valor de un indice.
 */

const arreglo = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];

//como lo hacia ANTES si queria rescatar el ultimo valor de un arreglo
console.log(arreglo[arreglo.length - 1]);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// seis

//AHORA con la nueva funcionalidad de ES13, puedo obtener el ultimo valor de un arreglo mucho mas facil.
console.log(arreglo.at(-1));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// seis

//si quisiera obtener el primer valor del arreglo, debo comenzar a contar desde la posicion cero.
console.log(arreglo.at(0));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// uno