/**
 * CLASE 27: ES11: BigInt y Nullish
 * 
 * nullish -> se declara utilizando dos signos de pregunta juntos ??
 * Su uso se da cuando se solicita un valor y este puede ser nulo, por lo que se le puede asignar un valor por defecto.
 */

const otroNumero = 1;
//creo una validacion, si otroNumero tiene valor, se imprimira eso. En caso contrario, si la respuesta es nulo o undefined, se tomara por defecto el valor de 5.
const validacion = otroNumero ?? 5;
console.log(validacion);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// 1


const otroNumero2 = null;
const validacion2 = otroNumero2 ?? 5;
console.log(validacion2);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// 5