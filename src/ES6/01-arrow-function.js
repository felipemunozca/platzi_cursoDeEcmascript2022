/**
 * CLASE 4: ES6: let y const, y arrow functions
 * 
 * Arrow function (Funcion flecha)
 * Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

// Creo una funcion tradicional
function cuadrado(numero) {
    return numero * numero;
}

// Creo una funcion flecha
const cuadrado = (numero) => {
    return numero * numero;
}

// Particularidades de las funciones flecha:
// si la funcion tiene un solo parametro, no es necesario agregar los parentesis.
// no es necesario escribir la palabra reservada return.
// a esto se le llama "return implicito".
const cuadrado = numero => numero * numero;
