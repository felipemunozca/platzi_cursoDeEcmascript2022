/**
 * CLASE 30: ES11: dynamic Import
 * 
 * La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicación. 
 * Esto permite que la página web sea más rápida, porque consume menos recursos.
 * 
 * La expresión import() recibe un argumento de tipo string con la ruta del módulo a importar y devuelve una promesa.
 */

//creo una variable para interactuar con el boton del index html.
const boton = document.getElementById('btn');

//creo un evento click, el cual tendra una funcion anonima de tipo asincronica.
boton.addEventListener("click", async function () {
    //IMPORTANTE: al importar un archivo, recuerda escribir la extension de dicho archivo.
    const modulo = await import('./07-module.js')
    console.log(modulo);
    //inicio la funcion del modulo.
    modulo.saludar();
})


//para ver el codigo funcionando, abrir el archivo index.html con LIVE SERVER.

/**
 * Una de las grandes ventajas de esta caracteristica de ES11 es que el modulo o el codigo javascript que nosotros importemos dinamicamente no usara nada de red hasta que lo solicitemos, por lo cual podremos verlo en la pestaña de red en cuanto solicitemos el recurso, esto ayuda a que no generemos trafico inncesario en la red mientras cargamos la pagina y solo al momento de ser utiliado
 */