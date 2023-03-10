/**
 * CLASE 34: ES13: top level await en el consumo de una API
 * 
 * Top level await permite utilizar la palabra reservada await, sin estar dentro de una función asíncrona con async. 
 * Sin embargo, únicamente se puede utilizar await en la parte superior del archivo de un módulo.
 */

//Para poder hacer pruebas con la API, es necesario instalar una dependecia, llamada node-fectch con el comando:
// npm install node-fetch

//importo el modulo de productos.
//NO olvidar agregar la extension .js sino fallara la ejecucion.
import { productos } from "./02-products.js";

console.log(productos);
console.log('¿Donde me ejecuto?');