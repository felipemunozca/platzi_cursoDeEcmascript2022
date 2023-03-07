# Resumen de cada clase

## Índice
* [ES9: expresiones regulares](#id1)
* [ES9: Promise.finally](#id2)

------------

## ES9: expresiones regulares [22/35]<a name="id1"></a>
La siguiente versión de ECMAScript fue publicada en 2018. Las características de ES9 o ES2018 que aprenderás son: expresiones regulares y propiedades de propagación.

### Expresiones regulares
Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y están presentes en todos los lenguajes de programación.

En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.
````javascript
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
````

### Propiedades de propagación
Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.
````javascript
const objeto = {
  nombre: "Andres",
  age: 23,
}

const usuario = {
    ...objeto,
    plataforma: "Platzi"
}
````
#### Crear copias de objetos utilizando las propiedades de propagación
Semejante a crear copias de arrays utilizando el operador de propagación, se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagación.

De esta manera el segundo objeto tendrá una referencia en memoria diferente al original.
````javascript
const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false
````
#### Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para crear una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original.
````javascript
const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true
````
La manera de solucionar esto es más compleja, tendrías que utilizar el operador de propagación para cada elemento en cada nivel de profundidad.

Sin embargo, recientemente salió una forma de crear una copia profunda con StructuredClone. Aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.
````javascript
const original = { datos: [1, [2, 3], 4, 5] }
const copia = structuredClone(original)

original === copia // false
original["datos"] === copia["datos"] // false
````

------------

## ES9: Promise.finally [23/35]<a name="id2"></a>
Las siguientes características de ES9 o ES2018 que aprenderás son: método finally para promesas y generadores asíncronos.

### Método finally en promesas
El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.
````javascript
promesa()
    .then(response => console.log(response) // Promesa resuelta
    .catch(error => console.log(response) // Promesa rechazada
    .finally( () => console.log("Finalizado") ) // Código final  
````

### Generadores asíncronos
Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.
````javascript
async function* anotherGenerator() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const generador = anotherGenerator()
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))
````
#### Cómo utilizar for await
De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.

El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.
````javascript
async function forAwait() {
  const nombres = ["Alexa", "Oscar", "David"]
  for await (let valor of nombres) {
    console.log(valor)
  }
}

forAwait()
````

------------