# Resumen de cada clase

## Índice
* [ES8: object entries y object values](#id1)
* [ES8: string padding y trailing commas](#id2)
* [ES8: funciones asíncronas](#id3)

------------

## ES8: object entries y object values [19/35]<a name="id1"></a>

Los métodos de transformación de objetos a arrays sirven para obtener la información de las propiedades, sus valores o ambas.

### Obtener los pares de valor de un objeto en un array
Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.
````javascript
const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 
/* 
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  
*/
````
### Obtener las propiedades de un objeto en un array
Object.keys() devuelve un array con las propiedades (keys) del objeto enviado como argumento.
````javascript
const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario) 
// [ 'name', 'email', 'age' ]
````
### Obtener los valores de un objeto en un array
Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.
````javascript
const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

Object.values(usuario) 
// [ 'Andres', 'andres@correo.com', 23 ]
````

------------

## ES8: string padding y trailing commas [20/35]<a name="id2"></a>
Las siguientes características de ES8 o ES2017 que aprenderás son: rellenar un string y trailing commas.

### Rellenar un string o padding
El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.

Este método recibe dos argumentos:
* La longitud máxima a rellenar, incluyendo el string inicial.
* El string para rellenar, por defecto, es un espacio.

Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

#### Método padStart
El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.
````javascript
'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"
````
#### Método padEnd
El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.
````javascript
'abc'.padEnd(10) // "abc       "
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"
````
### Trailing commas
Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.
````javascript
const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23, //<-- Trailing comma
}

const nombres = [
    "Andres",
    "Valeria",
    "Jhesly", //<-- Trailing comma
 ]
 ````

------------

## ES8: funciones asíncronas [21/35]<a name="id3"></a>
En ECMAScript 2017 o ES8 fue añadida una nueva forma de manejar el asincronismo en JavaScript mediante funciones asíncronas.

### Cómo utilizar funciones asíncronas
La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.
````javascript
async function asyncFunction () {...}

const asyncFunction = async () => { ... } 
````
La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.
````javascript
async function asyncFunction () {
	try {
		const response = await promesa()
		return response
	} catch (error) {
		return error
	}
}
````
¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy útiles, manejar ambas te hará un mejor desarrollador.

------------