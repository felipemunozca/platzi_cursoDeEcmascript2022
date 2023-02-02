/**
 * CLASE 11: ES6: Promesas
 * 
 * Una promesa es una forma de manejar el asincronismo en JavaScript.
 *  Se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados: o está resuelta o esta rechazada.
 * La promesa se puede cumplir hoy, mañana o nunca.
 * 
 */


// crear una nueva funcion utilizando arrow function.
// La promesa se declara utilizando la palabra reservada Promise() y dentro tendra una funcion anonima que recibira dos parametros: resolve y reject.
// Estas palabras son estandares por lo que se recomienda utilizar las mimas, para que luego cualquier persona que lea mi codigo, entienda la intencion de lo que hace el codigo.
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("La promesa se cumplio.");
        } else {
            reject("La promesa fallo.");
        }
    })
}

// Declaro la funcion y utilizo dos nuevos metodos:
// el metodo then() para retornar una respuesta.
// el metodo catch() para capturar el error.
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))

// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// La promesa se cumplio.


const anotherFunction2 = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("La promesa se cumplio.");
        } else {
            reject("La promesa fallo.");
        }
    })
}

anotherFunction2()
    .then(response => console.log(response))
    .catch(err => console.log(err))

// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// La promesa fallo.


/**
 * Video tutorial mas completo con promesas:
 * https://www.youtube.com/watch?v=rKK1q7nFt7M&t=36s&ab_channel=CarlosAzaustre-AprendeJavaScript
 */