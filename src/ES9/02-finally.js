/**
 * CLASE 23: ES9: Promise.finally
 * 
 * El método finally() se utiliza con promesas 
 * Consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
 */

//lo primero sera copiar el codigo de la clase ES6/07-promises.js
const otraFuncion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("La promesa se cumplio.");
        } else {
            reject("La promesa fallo.");
        }
    })
}

//finally() nos permite tener una funcion anonima para hacer algo cuando ya termino.
otraFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Termino la promesa.'))

//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// La promesa fallo.
// Termino la promesa.
