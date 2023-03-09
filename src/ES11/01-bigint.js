/**
 * CLASE 27: ES11: BigInt y Nullish
 * 
 * BigInt() -> permite manejar números enteros muy grandes
 * Existen dos formas de crear:
 * escribiendo un número entero seguido de n
 * mediante la función BigInt()
 */

const unNumeroGrande = 9565267564216n;
const otroNumeroGrande = BigInt(9565267564216);
console.log(unNumeroGrande);
console.log(otroNumeroGrande);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// 9565267564216n
// 9565267564216n