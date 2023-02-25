/**
 * CLASE 13: ES6: Modulos.
 * 
 * ES6 introduce una forma de manejar código en archivos de manera modular. 
 * Esto se traduce como exportar funciones o variables de un archivo, e importarlas en otros archivos donde se necesite.
 * 
 */

//se crea la logica principal en el archivo 10-module-2.js y se importan las funciones a este archivo.
//se debe utilizar la palabra reservada import el nombre de la funcion, luego from y la ruta donde esta el archivo.
import hello from "./10-module-2.js";

hello();
// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Error syntaxError.

//Para corregir el error de la sintaxis, se debe agregar codigo en el archivo package.json
//luego de la licencia de MIT agregar
//"type": "module"

//si vuelvo a ejecutar el codigo, me vuelve a aparecer un nuevo error que dice: 
//Cannot find module
//esto se debe a que al momento de exportar el nombre del archivo desde donde exporto el modulo, no le estoy poniendo la extension .js

//Si corrijo los errores y vuelvo a ejecutar el codigo con Run Code, la respuesta en la consola sera:
//Hello desde otro archivo.


/**
 * DATO IMPORTANTE:
 * puedes evitar la configuración del JSON usando la extención .mjs, esta le indica a JavaScript que es un módulo
 * 
 * por ejemplo
 * 09-module.mjs
 * 10-module-2.mjs
 */