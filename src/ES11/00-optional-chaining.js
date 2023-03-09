/**
 * CLASE 26: ES11: optional chaining
 * 
 * El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.
 * Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.
 */

const usuarios = {
    oscar: {
        pais: 'Mexico'
    },
    ana: {
        pais: 'Colombia'
    }
}
//utilizando el encadenamiento, apunto al usuario oscar, a la propiedad pais y veo la respuesta.
/* console.log(usuarios.oscar.pais); */
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// Mexico

//pero que pasa si estoy apuntando a un parametro que se que no existe, por ejemplo un usuario que se haya borrado en la base de datos.
/* console.log(usuarios.felipe.pais); */
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// TypeError: Cannot read properties of undefined (reading 'pais')

//El programa se rompera y la ejecucion se caera.
//Para evitar que se caiga la ejecucion, se puede utilizar el simbolo pregunta ? para preguntar si existe o no el parametro que estoy buscando.
//Si el dato no existe, me regresara undefined y asi evito que se rompa la aplicacion y siga corriendo.
console.log(usuarios.felipe?.pais);
//Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// undefined