/**
 * CLASE 8: ES6: spread operator
 * 
 * El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los elementos de un lista iterable. 
 * Ya sea un arreglo o string se deben utilizar tres puntos (...) dentro de un arreglo.
 * 
 */

// creo una variable y le asigno multiples valores como un objeto.
let persona = { nombre: 'Felipe', edad: 32 };
// creo una variable y le asigno un solo valor.
let pais = 'Chile';
// creo una variable y utilizando el operador  spread ... le asigno el objeto persona, junto a pais.
let data = { ...persona, pais };

console.log(data);
// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// { nombre: 'Felipe', edad: 32, pais: 'Chile' }

// Una utilidad que se le puede dar a este operador, es cuando tengo un objeto creado y necesito agregarle informacion, lo puedo hacer directamente creando variables. por ejemplo:
let data2 = { id: 1, ...persona, pais };
console.log(data2);
// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// { id: 1, nombre: 'Felipe', edad: 32, pais: 'Chile' }


// rest
// consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) y luego una variable que contendrá los elementos en un arreglo.
//Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un arreglo.

// creo una funcion que recibira un valor numerico unico y luego una serie de parametros.
function sumar(numero, ...valores) {
    console.log(valores);
    // imprimo la suma del primer valor numerico, con el primer valor del arreglo valores.
    console.log(numero + valores[0]);
    return numero + valores[0];
}

sumar(1, 2, 3, 4);
// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// [ 2, 3, 4 ]  -> estos son los valores
// 3            -> la suma de 1 + 2
