/**
 * CLASE 28: ES11: Promise.allSettled
 * 
 * Promise.allSettled() -> este metodo permite ejecutar un grupo de promesas, independientemente si han sido resueltas o rechazadas.
 */

//creo distintas promesas, algunas se cumpliran y otras se rechazaran.
//IMPORTANTE RECORDAR: resolve y reject no son palabras reservadas, por lo que se puede usar cualquier palabra dentro de la funcion, pero se recomienda usar estas debido a un estandar en la programacion, para que si otro programador ve el codigo, entienda que es lo que se esta haciendo.
const promesa1 = new Promise((resolve, reject) => reject('Se rechaza la primera promesa'));
const promesa2 = new Promise((resolve, reject) => resolve('Se cumple la segunda promesa'));
const promesa3 = new Promise((resolve, reject) => resolve('Se cumple la tercera promesa'));

//utilizo el metodo allSettled() y le paso todas las promesas como si fueran un arreglo.
Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// [
//     { status: 'rejected', reason: 'Se rechaza la primera promesa' },
//     { status: 'fulfilled', value: 'Se cumple la segunda promesa' },
//     { status: 'fulfilled', value: 'Se cumple la tercera promesa' }
// ]