/**
 * CLASE 22: ES9: expresiones regulares
 * 
 * Propiedades de propagacion.
 * Consiste en expandir las propiedades de un objeto, utilizando el spread operator. Esto sirve para crear nuevos objetos a partir de otros.
 */

//creo el objeto usuario
const usuario = {
    nombre: 'Felipe',
    edad: 32,
    pais: 'Chile'
};
//creo una nueva constante para separar el objeto.
const { nombre, ...valores } = usuario;
console.log(nombre);
console.log(valores);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Felipe
// { edad: 32, pais: 'Chile' }


/**
 * APUNTES IMPORTANTES DE COMPAÑEROS.
 * 
 * Rest Operator
 * En realidad lo que el profe Oscar explicó después de las regex no es el spread operator, sino el Rest operator
 * Ambos tienen la misma sintaxis de 3 puntitos < … > pero son distintos.
 * 
 * ¿Como se diferencia el Rest Operator del Spread Operator?
 *      - La sintaxis spread “expande” un arreglo en sus elementos, mientras que la sintaxis rest recopila varios elementos y los “condensa” en un solo elemento.
 *      - Rest tiene dos aplicaciones, como Rest property (en asignación desestructurada) y como Rest parameters.
 *      - El ejemplo del profesor muestra el uso de Rest Property, es decir, una asignación desestructurada aplicada en un objeto.
 * 
 * Los rest parameters permiten a una función aceptar una cantidad indefinida de argumentos (aunque esto no suele ser una buena práctica).
 * 
 * Ejemplo con codigo:
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}
console.log(sum(1, 2, 3)); // expected output: 6
console.log(sum(1, 2, 3, 4)); // expected output: 10
 */