/**
 * CLASE 34: ES13: top level await en el consumo de una API
 * 
 * En este archivo se creara un modulo donde se utilizara node-fetch para conectarse a la fakeAPI y luego exportar dicho modulo para ser llamado en otros archivos.
 * Para el desarrollo de este ejercicio se utilizara la API de platzi llamada fakeapi y esta es su URL
 *      https://api.escuelajs.co/api/v1/products
 */

import fectch from "node-fetch";

const respuesta = await fectch('https://api.escuelajs.co/api/v1/products');
const productos = await respuesta.json();

export { productos };

//si quito los await y vuelvo a ejecutar el codigo, ya que el compilador no es capaz de procesar los datos de la API porque no alcanzan a llegar todos y asi no los puede mostrar.