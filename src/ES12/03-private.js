/**
 * CLASE 32: ES12: promise-any y métodos privados
 * 
 * métodos privados -> consiste en limitar el acceso a propiedades y metodos agregando el caracter numeral (#).
 * Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.
 */

//copiar el codigo del ejercicio ES6/08-classes.js
class usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //convierto en privado hablar()
    #hablar() {
        return 'Hola';
    }
    saludar() {
        return `${this.hablar()} ${this.nombre}`;
    }

    //convierto en privado el get y set de suEdad.
    get #suEdad(){
        return this.edad;
    }
    set #suEdad(numero){
        this.edad = numero;
    }
}

const david = new usuario('David', 15);
console.log(david.suEdad);
console.log(david.suEdad = 20);

// Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
// undefined
// 20