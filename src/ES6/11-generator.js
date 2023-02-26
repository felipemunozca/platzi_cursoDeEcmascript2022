/**
 * CLASE 15: ES6: GENERATOR
 * 
 * los generadores son un tipo especial de funcion que nos va a retornar una serie de valores segun el algoritmo definido.
 * Los generadores son funciones especiales que pueden pausar su ejecución, 
 * luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
 */


//para indicar que estoy creando un generator, se escribe function junto a un asterisco *.
function* iterar(arreglo) {
    //se crea un ciclo for para que por cada elemento del arreglo
    for (let valor of arreglo) {
        //yield -> palabra reservada para retornar valores.
        yield valor;
    }
}

//creo una nueva constante a la cual le paso un arreglo de string.
const it = iterar(['Oscar', 'David', 'Ana', 'Julio', 'Andrea']);
//next -> palabra reservada de los generator.
//value -> palabra reservada de los generator.
console.log(it.next().value);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
//Oscar.
//Pero que pasa si quiero ver los otros valores del arreglo, para ello solo debo agregar mas impresiones de pantalla.
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
//Oscar
//David
//Ana
//Julio
// La gran ventaja de esta funcion, es que no tengo que agregar una posicion del arreglo o una referencia. Solo con next() va pasando al siguiente valor.

//y que pasa si agrego mas impresiones de las que existen en el arreglo.
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
//Oscar
//David
//Ana
//Julio
//Andrea
//undefined
//undefined