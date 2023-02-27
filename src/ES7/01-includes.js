/**
 * CLASE 18: ES7: exponentiation operator y array includes
 * 
 * includes -> metodo que se utiliza para recorrer arreglos y determinar si existe un elemento X o no. La respuesta sera TRUE o FALSE.
 */

//creo una arreglo de numeros y utilizando el metodo includes() le pregunto si estan los numeros 4 y 5
let numeros = [1, 3, 5, 7, 9, 11];
console.log(numeros.includes(4));
console.log(numeros.includes(5));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
//false
//true


//creo un arreglo de nombres. Esta vez intentare imprimir la respuesta diferenciando nombres escritos con mayusculas y minisculas.
let nombres = ['Oscar', 'David', 'Ana'];
console.log(nombres.includes('Oscar'));
console.log(nombres.includes('david'));
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
//true
//false
