/**
 * CLASE 29: ES11: globalThis y matchAll
 * 
 * El motor de JavaScript, aquella herramienta que compila los archivo y los convierte en código que entiende el computador, al iniciar la compilación crea un objeto global.
 * objeto global -> proporciona funciones y variables propias e integradas en el lenguaje o el entorno. 
 * Dependiendo la plataforma, este objeto global tendrá un nombre diferente.
 * En el navegador el objeto global es window
 */

//llamo al objeto global de window desde el lado del editor de codigo.
console.log(window); //navegador
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// ReferenceError: window is not defined

//Me aparecera un error debido a que window no se puede leer con Run Code, sino que tiene que ser directamente desde la consola del navegador.

console.log(global); //node

console.log(self); //webworker

//para corregir este problema, se creo una forma de llamar al objeto global desde el ide. De esta manera se podra ejecutar el codigo con un estandar en cualquier tipo de sistema.
console.log(globalThis);