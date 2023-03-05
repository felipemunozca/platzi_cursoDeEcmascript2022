/**
 * CLASE 21: ES8: funciones asíncronas
 * 
 * Su declaracion es similar a cualquier funcion, solo que utiliza la palabra reservada "async" antes de declarar los argumentos. Dentro de la funcion, se utiliza la palabra reservada "await" la que espera la resolucion de una promesa.
 * 
 * async -> hace que una funcion se vuelva asincronica y SIEMPRE retorna una promesa.
 * await -> hace esperar la ejecucion de la funcion mientras la promesa se resuelve.
 * 
 * Funciona con promesas, las cuales se pueden cumplir ahora, despues o nunca.
 */

//crear una funcion flecha que retorne una promesa.
const funcionPromesa = () => {
    return new Promise((resolve, reject) => {
        //se crea un if ternario.
        (true) 
            ? setTimeout(() => resolve('Soy asincrono!'), 3000)
            : reject(new Error('Se produjo un error!'));
    })
}

//creo una nueva constante para ejecutar la promesa.
//antes de los argumentos, debe ir la palabra reservada async.
//dentro de la funcion se espera la respuesta con la palabra reservada await.
const funcionAsincrona = async () => {
    const respuesta = await funcionPromesa();
    console.log(respuesta);
}

//para probar como se ejecutan las funciones asincronas, agregare un mensaje antes y despues de iniciar la funcion.
console.log('Antes de llamar a la funcion');
funcionAsincrona();
console.log('Despues de llamar a la funcion');

//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Antes de llamar a la funcion
// Despues de llamar a la funcion
// Soy asincrono!

//El orden de los mensajes se invirtio, ya que la promesa debe esperar 3 segundos para mostrar su mensaje, sea resuelto o rechezado.
//Esto es lo que se conoce como codigo no bloqueante, ya que se puede ejecutar en distintos tiempos, sin que el programa se colapse.