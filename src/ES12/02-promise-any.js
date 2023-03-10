/**
 * CLASE 32: ES12: promise-any y métodos privados
 * 
 * Promise.any() -> metodo con el cual se puede manejar varias promesas a la vez, y que devuelve la PRIMERA que se resuelve de forma satisfactoria.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 */

//lo primero sera copiar el codigo del archivo ES11/03-promise-allsettled.js
const promesa1 = new Promise((resolve, reject) => reject('Se rechaza la primera promesa'));
const promesa2 = new Promise((resolve, reject) => resolve('Se cumple la segunda promesa'));
const promesa3 = new Promise((resolve, reject) => resolve('Se cumple la tercera promesa'));

Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Se cumple la segunda promesa


//en el caso en que todas las promesas sean rechazadas, aparecera  un error indicando:
// All promises were rejected