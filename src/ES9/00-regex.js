/**
 * CLASE 22: ES9: expresiones regulares
 * 
 * Esta versión de ECMAScript fue publicada en 2018.
 * Las expresiones regulares son patrones de busqueda y manipulacion de cadenas de caracteres.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 * 
 * CURSO DE EXPRESIONES REGULARES: https://platzi.com/cursos/expresiones-regulares/
 */

//se crea un manejo de fechas con regex.
//el orden seran: año - mes - dia.
const regex = /(\d{4})-(\d{2})-(\d{2})/;

//genero una constante para ver si se cumple con la regla.
//exex() -> metodo para ejecutar una busqueda en una cadena de caracteres.
const emparejar = regex.exec('2023-06-03');
//imprimo la respuesta utilizando table() para ver con mas detalles la informacion.
console.table(emparejar);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │    0    │ '2023-06-03' │
// │    1    │    '2023'    │
// │    2    │     '06'     │
// │    3    │     '03'     │
// │  index  │      0       │
// │  input  │ '2023-06-03' │
// │ groups  │  undefined   │
// └─────────┴──────────────┘