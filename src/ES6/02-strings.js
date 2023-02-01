/**
 * CLASE 5: ES6: strings
 * 
 * Template literals:
 * Nos van a permitir concatenar strings de una forma mas amigable.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
 * Comillas francesas o Acento grave: https://www.tecnolopedia.com/ascii/acento-grave/
 */

// Forma antigua de concatener dos mensajes utilizando + +
let hello = 'Hola';
let world = 'Mundo';
let fraseEpica = hello + ' ' + world;
console.log(fraseEpica);

// En los template literals e deben utilizar comillas francesas ` ` y para utilizar variables en el mensaje: signo peso y llaves ${}
let fraseEpica2 = `${hello} ${world}`;
console.log(fraseEpica2);

/**
 * Multi-line strings
 * Es la forma en que vamos a poder trabajar con multiples lineas asignadas dentro de un strings, para poder hacer saltos de texto segun se necesite.
 */

let lorem = 'Esto es un string \n ' + 'Esto es otra linea';

let lorem2 = `Esto es una frase epica
Esto es la continuación de la frase epica.
`;

console.log(lorem);
console.log(lorem2);