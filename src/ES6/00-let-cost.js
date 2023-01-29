/**
 * ECMAScript 6
 * Lanzado en junio de 2015.
 */

/* CLASE 4: ES6: let y const, y arrow functions */
/* Variables en JavaScript */

// NOTA: para ejecutar el codigo, seleccionar la porcion de codigo, clic derecho, y en el menu seleccionar "Run code".

// var
var nombre = 'Felipe'; // declarar y asignar.
nombre = 'Oscar'; // reasignar.
console.log(nombre);
// La respuesta en la consola sera: Oscar.

// let
let fruta = 'Manzana'; // declarar y asignar.
fruta = 'Pera'; // reasignar.
console.log(fruta);
// La respuesta en la consola sera: Pera.

// const
const animal = 'Perro'; // declarar y asignar.
animal = 'Gato'; // reasignar.
console.log(animal);
// La respuesta en la consola sera: Un error ya que las variables const no pueden reasignar un valor.

// creo una funcion frutas que tendra diferentes valores con diferentes tipos de variables, y luego tratare de imprimir las respuestas.
const frutas = () => {
    if (true) {
        var fruta1 = 'Manzana'; //function scope.
        let fruta2 = 'Kiwi'; //block scope.
        const fruta3 = 'Banana'; //block scope.
    }

    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}
// inicializo la funcion.
frutas();
// La respuesta en la consola sera: Error ya que no console.log(fruta2) no encuentra la variable fruta2.

// Este error es conocido como "function Scope". 
// Dentro de una funcion se podra acceder o no a una variable dependiendo del "alcance" que tenga esta: 
// Las variables var pueden ser leidas desde cualquier parte de la funcion.
// En cambio, con let y const las variables solo tendran "vida" dentro de la funcion donde fueron declaradas.