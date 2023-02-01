/**
 * CLASE 6: parámetros por defecto
 * 
 * Consiste en establecer un valor por defecto a los parametros que una función. 
 * Esto se utiliza cuando se debe asegurar que el código se ejecute correctamente y en el caso de que no se establezcan los argumentos correspondientes en la invocación de la función se rellenen con valores por defecto.
 * 
 * DOCUMENTACIÓN OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */

// creo una funcion para registrar un nuevo usuario, necesito un nombre, edad y pais.
// la funcion recibira 3 argumentos y en el caso que uno o varios valores no vengan, se ejecutaran los parametros por defecto: 'Felipe', 32, 'Chile'
// los simbolos || se entienden como "o". Se usa un valor "o" el por defecto.
function nuevoUsuario(nombre, edad, pais) {
    var nombre = nombre || 'Felipe';
    var edad = edad || 32;
    var pais = pais || 'Chile';
    console.log(nombre, edad, pais);
}

// ejecuto la funcion sin enviarle ningun valor.
nuevoUsuario();
// ejecuto la funcion enviandole los 3 argumentos.
nuevoUsuario('Oscar', 34, 'México');

//Si selecciono todo el codigo de las lineas 13 a 23 y lo ejecuto, la respuesta en la consola sera:
// Felipe 32 Chile
// Oscar 34 México


// Utilizando ES6 puedo realizar esta misma funcion, de una forma mas amigable.
// creo una funcion para registrar un nuevo administrador, necesito un nombre, edad y pais.
// se crean los parametros de la funcion, y no es necesario volver a declararlos como una variable, ya que al momento de definirlos puedo utilizar el signo "=" para asignarles sus valores por defecto.
function nuevoAdministrador(nombre = 'David', edad = 21, pais = 'Colombia') {
    console.log(nombre, edad, pais);
}

// ejecuto la funcion sin enviarle ningun valor.
nuevoAdministrador();
// ejecuto la funcion enviandole los 3 argumentos.
nuevoAdministrador('Ana', 28, 'Peru');

// Si selecciono todo el codigo de las lineas 33 a 40 y lo ejecuto, la respuesta en la consola sera:
// David 21 Colombia
// Ana 28 Peru
