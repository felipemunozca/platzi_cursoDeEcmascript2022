# Resumen de cada clase

## Índice
* [ES12: numeric-separators y replaceAll](#id1)
* [ES12: promise-any y métodos privados](#id2)

------------

## ES12: numeric-separators y replaceAll [31/35]<a name="id1"></a>
La siguiente versión de ECMAScript fue publicada en 2021. Las siguientes características de ES12 o ES2021 que aprenderás son: separadores numéricos y método replaceAll para strings.

### Separadores numéricos
Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución del programa.

Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc.
````javascript
// 🔽 Baja legibilidad
const numero1 = 3501548945
console.log( numero1 ) // 3501548945

// ✅ Alta legibilidad
const numero2 = 3_501_548_945
console.log( numero1 ) // 3501548945
````
De esta manera puedes identificar el número rápidamente.

### Método replaceAll
El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.

Este método recibe dos argumentos:
* El patrón a reemplazar, puede ser un string o una expresión regular.
* El nuevo elemento que sustituye al reemplazado.

Este procedimiento fue creado para solucionar el problema que tenía el método replace, que realizaba la misma función de reemplazar elementos, pero solamente una sola vez por invocación.
````javascript
const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'
````

------------

## ES12: promise-any y métodos privados [32/35]<a name="id2"></a>
Las siguientes características de ES12 o ES2021 que aprenderás son: métodos privados en clases y Promise.any.

### Métodos privados de clases
Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.
````javascript
class Clase {
	#private(valor){
		console.log(valor)
	}

	public(valor){
		console.log(valor)
	}
}

const clase = new Clase()
clase.public("Hola")  // 'Hola'
clase.private("Hola") // TypeError: clase.private is not a function
````
### Promise.any
Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas.
````javascript
const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve("Promesa 3")


Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promise 3
    .catch(error => console.log(error))
````

------------