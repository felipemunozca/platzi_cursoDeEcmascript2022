/**
 * CLASE 17: ES6: set-add
 * 
 * Set -> es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.
 * add -> es un metodo para agregar nuevos valores a un elemento ya definido.
 */

//crear una lista
const lista = new Set();

lista.add('item 1');
lista.add('item 2');
lista.add('item 3');

console.log(lista);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
//Set(3) { 'item 1', 'item 2', 'item 3' }