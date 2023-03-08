/**
 *  CLASE 25: ES10: try catch y fromEntries
 * 
 * catch -> parametro para capturar el error.
 */

//creo una porcion de codigo con try-catch y le paso una funcion que no he creado.
try {
    unaFuncion();
} catch (error) {
    console.log(error);
}
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// ReferenceError: unaFuncion is not defined

//creo una nueva porcion de codigo try-catch pero esta vez no declaro el parametro "error".
try {
    otraFuncion();
} catch {
    console.log('Se captura el error');
}
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Se captura el error

//Se puede personalizar el mensaje del error, pero esto no es recomendado, ya que no me esta diciendo que estoy haciendo mal. en cambio, si capturo el error como en el primer ejemplo, el mismo compilador o navegador, me daran pistas de donde puede ser que se este generando el error.