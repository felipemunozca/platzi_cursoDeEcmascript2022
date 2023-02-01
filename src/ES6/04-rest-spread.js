/**
 * CLASE 7: ES6: asignación de desestructuración
 * 
 * La desestructuración (destructuring) consiste en extraer los valores de un ARREGLO o propiedades de un OBJETO en distintas variables.
 * 
 */

// desestructuración de arreglos.
let frutas = ['Manzana', 'Banana'];
let [a, b] = frutas;
console.log(a, b);
// otra forma de acceder a cada valor, es utilizando la posicion que tiene dentro del arreglo.
console.log(a, frutas[1], frutas[0]);
// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Manzana Banana
// Manzana Banana Manzana



// desestructuración de objetos.
let usuario = { nombreUsuario: 'Oscar', edad: 34 };
let { nombreUsuario, edad } = usuario;
console.log(nombreUsuario, edad);
// otra forma de acceder a la propiedad del objeto es llamando a la variable con la que se declaro.
console.log(nombreUsuario, usuario.edad);
// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Oscar 34
// Oscar 34