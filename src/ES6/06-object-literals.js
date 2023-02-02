/**
 * CLASE 10: ES6: object literals
 * 
 * Los objetos literales consisten en crear objetos a partir de variables sin repetir el nombre.
 */


//mejora de object literals
// Se crea una funcion, la cual retornara un objeto con los 3 parametros. 
// Con ES5 se hacia esto, se debia crear cada parametro igualandolo al valor original.
function nuevoUsuario(usuario, edad, pais) {
    return {
        usuario: usuario,
        edad: edad,
        pais: pais,
    }
}

// Con ES6 si los elementos del objeto, tienen un nombre que retornaran el mismo valor, no es necesario volver a declararlos y solo se puede pasar de forma directa.
function nuevoUsuario2(usuario, edad, pais) {
    return {
        usuario,
        edad,
        pais
    }
}

console.log('spriggan', 32, 'Chile');
// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// spriggan 32 Chile