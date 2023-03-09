/**
 * CLASE 29: ES11: globalThis y matchAll
 * 
 * matchAll() -> metodo con el cual se pueden crear reglas con una expresion regular para filtrar o buscar.
 * la busqueda se definira como un parametro y mostrara todas las coincidencias que encuentre.
 * De esta forma podria validar por ejemplo una contraseña, cierta cantidad de caracteres, mayusculas y minusculas, simboles, etc.
 */

//creo una expresion regular para filtrar una palabra especifica.
const regex = /\b(manzana)+\b/g;

const texto = 'Las frutas son saludables, buena fuente de vitaminas y minerales y sabrosas. Existe la naranja, la manzana, la sandia entre muchas mas. A mi personalemente me gusta el jugo de manzana.';

for (const buscar of texto.matchAll(regex)) {
    console.log(buscar);
}

// [
//     'manzana',
//     'manzana',
//     index: 99,
//     input: 'Las frutas son saludables, buena fuente de vitaminas y minerales y sabrosas. Existe la naranja, la manzana, la sandia entre muchas mas. A mi personalemente me gusta el jugo de manzana.',
//     groups: undefined
// ]
// [
//     'manzana',
//     'manzana',
//     index: 176,
//     input: 'Las frutas son saludables, buena fuente de vitaminas y minerales y sabrosas. Existe la naranja, la manzana, la sandia entre muchas mas. A mi personalemente me gusta el jugo de manzana.',
//     groups: undefined
// ]