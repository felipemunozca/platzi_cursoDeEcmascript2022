/**
 * CLASE 23: ES9: Promise.finally
 * 
 * Generadores asíncronos
 * son semejantes a los generadores que ya vimos en ES6/11-generator.js , pero combinando la sintáxis de promesas.
 * RECUERDA: se le debe pasar el asterisco * a la funcion para activalar como un generador.
 * yield -> palabra reservada se usa para pausar y reanudar una función generator.
 * next() -> palabra reservda que se usa para pedir cada uno de los valores y el estado que genera el generator.
 */

async function* otroGenerador(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
//inicializo la funcion.
const iniciar = otroGenerador();
iniciar.next().then(respuesta => console.log(respuesta.value));
iniciar.next().then(respuesta => console.log(respuesta.value));
iniciar.next().then(respuesta => console.log(respuesta.value));
console.log('Hola');
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Hola
// 1
// 2
// 3


/**
 * for await
 * es un ciclo repetitivo que se maneja asíncronamente. 
 * El ciclo siempre debe estar dentro de una función con async.
 * El valor es cada elemento del iterable puede tener cualquier valor.
 */

async function arregloDeNombres(arreglo) {
    for await (let valor of arreglo) {
        console.log(valor);
    }
}

const nombres = arregloDeNombres(['Oscar', 'David', 'Ana', 'Felipe']);
console.log('Despues de la ejecucion.')
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Despues de la ejecucion.
// Oscar
// David
// Ana
// Felipe