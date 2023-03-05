/**
 * CLASE 20 : ES8: string padding y trailing commas
 * 
 * string padding -> es la forma de rellenar un string con caracteres al inicio a al final repitiendo el valor hasta cumplir con el numero designado.
 * padStart() -> metodo para rellenar al inicio.
 * padEnd() -> metodo para rellenar al final.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 */

const string = "Hola";
//imprimo el valor de string utilizando el metodo padStart() que dentro llevara dos valores. El primero sera la cantidad de espacios que se contaran y la segunda, un nuevo mensaje que se agregara delante de string las veces que se indique en el numero asignado.
console.log(string.padStart(5, 'Mundo'));
console.log(string.padStart(10, 'Mundo'));
console.log(string.padStart(15, 'Mundo'));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// MHola
// MundoMHola
// MundoMundoMHola

//tambien se puede imprimir el mensaje utilizando caracteres para rellenar.
console.log(string.padStart(6, '_'));
console.log(string.padStart(10, '.'));


// con el metodo padEnd, se produce el resultado contrario, el numero mensaje se agregara al final del string original, las veces que se indique.
console.log(string.padEnd(5, 'Mundo'));
console.log(string.padEnd(10, 'Mundo'));
console.log(string.padEnd(15, 'Mundo'));
console.log(string.padEnd(6, '_'));
console.log(string.padEnd(10, '.'));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// HolaM
// HolaMundoM
// HolaMundoMundoM
// Hola__
// Hola......