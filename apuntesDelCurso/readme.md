# Curso de ECMAScript 6+  

## Índice
* [ES6: let y const, y arrow functions](#id4)
* [ES6: strings](#id5)
* [ES6: parámetros por defecto](#id6)
* [ES6: asignación de desestructuración](#id7)
* [ES6: spread operator](#id8)
* [ES6: object literals](#id10)
* [ES6: Promesas](#id11)
* [ES6: Modulos](#id13)
* [ES6: generator](#id15)
* [ES6: set-add](#id17)
* [ES7: exponentiation operator y array includes](#id18)
* [ES8: object entries y object values](#id19)
* [ES8: string padding y trailing commas](#id20)
* [ES8: funciones asíncronas](#id21)
* [ES9: expresiones regulares](#id22)
* [ES9: Promise.finally](#id23)
* [ES10: flat-map y trimStart-trimEnd](#id24)
* [ES10: try catch y fromEntries](#id25)
* [ES11: optional chaining](#id26)
* [ES11: BigInt y Nullish](#id27)
* [ES11: Promise.allSettled](#id28)
* [ES11: globalThis y matchAll](#id29)
* [ES11: dynamic Import](#id30)
* [ES12: numeric-separators y replaceAll](#id31)
* [ES12: promise-any y métodos privados](#id32)
* [ES13: at](#id33)
* [ES13: top level await en el consumo de una API](#id34)

------------

## ES6: let y const, y arrow functions [4/35]<a name="id4"></a>
En ECMAScript 6 (ES6 o ES2015) fueron publicadas varias características nuevas que dotaron de gran poder al lenguaje, dos de estas son una nueva forma de declaración de variables con let y const, y funciones flechas.

### La nueva forma para declarar variables con let y const

Hasta ahora aprendiste a declarar variables con var, sin embargo, a partir de la especificación de ES6 se agregaron nuevas formas para la declaración de variables.

Las nuevas palabras reservadas let y const resuelven varios problemas con var como el scope, hoisting, variables globales, re-declaración y re-asignación de variables.

#### Variables re-declaradas y re-asignadas
La re-declaración es volver a declarar una variable, y la re-asignación es volver a asignar un valor. Entonces cada palabra reservada tiene una forma diferente de manejar variables:

 - Una variable declarada con var puede ser re-declarada y re-asignada.
 - Una variable declarada con let puede ser re-asignada, pero no re-declarada.
 - Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

En conclusión, si intentas re-declarar una variable declarada con let y const habrá un error de “variable ya declarada”; por otro lado, si intentas re-asignar una variable declarada con const existirá un “error de tipo”.

En los demás casos, JavaScript lo aceptará como válidos, algo problemático con var, por eso deja de utilizarlo.

Ejemplo de declaración y asignación en diferentes líneas
```javascript
// Declaración de variables
var nameVar 
let nameLet

// Asignación de variables
nameVar= "soy var"
nameLet = "soy let"
```

Aunque realmente lo que pasa si no asignas un valor en la declaración, JavaScript le asigna un valor undefined.

Ejemplo de declarar y asignar con const en diferentes líneas de código
```javascript
const pi  // SyntaxError: Missing initializer in const declaration.
pi = 3.14
```
Ejemplo de re-declaración de variables
```javascript
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-declaración de variables
var nameVar = "var soy" 
console.log(nameVar) // 'var soy'

let nameLet = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.

const nameConst = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.
```

Ejemplo de re-asignación de variables
```javascript
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-asignación de variables
nameVar = "otro var"
console.log(nameVar) // 'otro var'

nameLet = "otro let"
console.log(nameVar) // otro let'

nameConst = "otro const" //TypeError: Assignment to constant variable.
```
Ten en cuenta que los errores pararán la ejecución de tu programa.

#### Scope
En el tema del scope, let y const tienen un scope de bloque y var no.
```javascript
{
    var nameVar = "soy var"
    let nameLet = "soy let"
}

console.log(nameVar) // 'soy var'
console.log(nameLet) // ReferenceError: nameLet is not defined
```
Todo el tema de Scope tiene su propio curso que deberías haber tomado: Curso de Closures y Scope en JavaScript

#### Objeto global
En variables globales, let y constno guardan sus variables en el objeto global (window, global o globalThis), mientras que var sí los guarda.
```javascript
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

globalThis.nameVar   // 'soy var'
globalThis.nameLet   // undefined
globalThis.nameConst  // undefined
```
Esto es importante para que no exista re-declaración de variables.

### Funciones flecha
Las funciones flecha (arrow functions) consiste en una función anónima con la siguiente estructura:
```javascript
//Función tradicional
function nombre (parámetros) {
    return valorRetornado
}

//Función flecha
const nombre = (parámetros) => {
    return valorRetornado
}
```
Se denominan función flecha por el elemento => en su sintaxis.

#### Omitir paréntesis en las funciones flecha
Si existe un solo parámetro, puedes omitir los paréntesis.
```javascript
const porDos = num => {
    return num * 2
}
```
#### Retorno implícito
Las funciones flecha tienen un retorno implícito, es decir, se puede omitir la palabra reservada return, para que el código sea escrito en una sola línea.
```javascript
//Función tradicional
function suma (num1, num2) {
    return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2
```
Si el retorno requiere de más líneas y aún deseas utilizarlo de manera implícita, deberás envolver el cuerpo de la función entre paréntesis.
```javascript
const suma = (num1, num2) => (
    num1 + num2
)
```

------------

## ES6: strings [5/35]<a name="id5"></a>
Las plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener variables sin utilizar la concatenación. Esto mejora la legibilidad y la mantenibilidad del código.

### Concatenación de caracteres
Antes de ES6, si querías crear una cadena larga o un mensaje elaborado, debías utilizar la concatenación. La concatenación de caracteres consiste en unir uno o varios caracteres, como si fuera una suma.
```javascript
var nombre = "Andres"
var edad = 23
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años."

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
```
Esto trae varios problemas en la legibilidad y mantenibilidad del código. Se convierte cada vez más complejo en mensajes más extensos o el estar pendiente de agregar espacios antes o después de cada variable concatenada.

Cómo utilizar las plantillas literales
Las plantillas literales añadidas en ES6, se emplea el caracter acento grave ( ` ), que no es una comilla simple ( ’ ), para envolver el mensaje. Para incluir las variables se utiliza la sintaxis ${variable}.
```javascript
var nombre = "Andres"
var edad = 23

var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
```
De esta manera el código es más legible y que pueda mantenerse.

### Plantilla multilínea
La plantilla multilínea consiste en crear mensajes que contengan varias líneas separadas entre sí, utilizando las plantillas literales. Antes de ES6, la forma de crear una plantilla multilínea era agregar \n al string.
```javascript
var mensaje = "Línea 1 \n" + "línea 2"

console.log(mensaje)
// 'Línea 1
// línea 2'
```
Con ES6 solamente necesitas utilizar las plantillas literales.
```javascript
const mensaje = `Línea 1
línea 2`

console.log(mensaje)
// 'Línea 1
// línea 2'
```

------------

## ES6: parámetros por defecto [6/35]<a name="id6"></a>
Los parámetros por defecto (default params) consisten en establecer un valor por defecto a los parámetros de una función, para asegurar que el código se ejecute correctamente en el caso de que no se establezcan los argumentos correspondientes en la invocación de la función.

### Cómo era utilizar valores por defecto antes de ES6
Tal como puedes ver en el siguiente código, la función sumar recibe dos parámetros y retorna el valor total. Sin embargo, si alguien no decide poner alguno o todos los parámetros necesarios, pues que el programa no funcionará correctamente.
```javascript
function sumar(number1, number2){
 	return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // NaN  
sumar()    // NaN
```
Antes de ES6, se debía establecer una variable y utilizar el operador OR ( ||) con el valor por defecto necesario. El caracter guion bajo ( _) lo utilizo para diferenciar el parámetro de la función de la variable declarada.
```javascript
function sumar(number1, number2){
 	var _number1 = number1 || 0
 	var _number2 = number2 || 0

	return _number1 + _number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0
```
### Cómo utilizar los parámetros por defecto
Con los parámetros por defectos añadidos en ES6, eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código de la siguiente manera:
```javascript
function sumar(number1 = 0, number2 = 0){
	return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0
```
Puedes utilizar cualquier valor, siempre que sea necesario.

#### Posición de los parámetros por defecto
Si obligatoriamente necesitas el valor como argumento, ten presente que los parámetros por defecto siempre deben estar en las posiciones finales.
```javascript
// ❌ Mal
function sumar(number1 = 0, number2) { ... }
sumar(3)   // number1 = 3 y number2 = undefined 

// ✅ Bien
function sumar(number1, number2 = 0) { ... }
sumar(3)   // number1 = 3 y number2 = 0
```

------------

## ES6: asignación de desestructuración [7/35]<a name="id7"></a>

La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

### Desestructuración de objetos
La desestructuración de objetos implica extraer las propiedades de un objeto en variables. Mediante el mismo nombre de la propiedad del objeto con la siguiente sintaxis:
```javascript
const objeto = { 
    prop1: "valor1",
    prop2: "valor2",
    ... 
} 

// Desestructuración
const { prop1, prop2 } = objeto
```
Antes de ES6, necesitabas acceder al objeto con la notación punto o corchetes por cada propiedad que se necesita y asignar ese valor a una variable diferente.
```javascript
var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'
```
Con la desestructuración puedes realizar lo mismo, pero en una sola línea, provocando que el código seas más legible y mantenible.
```javascript
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'
```
#### Cambiar el nombre de las variables con desestructuración
Si no te agrada el nombre de la propiedad del objeto, puedes cambiarlo utilizando la siguiente sintaxis:
```javascript
const objeto = { prop1: "valor1", prop2: "valor2", ... } 

// Desestructuración
const { prop1: newProp1, prop2: newProp2 } = objeto
```
Por ejemplo:
```javascript
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined
```
#### Desestructuración en parámetros de una función
Si envías un objeto como argumento en la invocación a la declaración de una función, puedes utilizar la desestructuración en los parámetros para obtener los valores directamente. Ten en cuenta que el nombre debe ser igual a la propiedad del objeto.
```javascript
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'
```
### Desestructuración de arrays
La desestructuración de arrays consiste en extraer los valores de un array en variables, utilizando la misma posición del array con una sintaxis similar a la desestructuración de objetos.
```javascript
const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3
```
#### Desestructuración para valores retornados de una función
Cuando una función retorna un array, puedes guardarlo en una variable. Por ende, puedes utilizar la desestructuración para utilizar esos valores por separado de manera legible.
En el siguiente ejemplo, la función useState retorna un array con dos elementos: un valor y otra función actualizadora.
```javascript
function useState(value){
    return [value, updateValue()]
}

//Sin desestructuración 
const estado = useState(3)
const valor = estado[0]
const actualizador = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)
```
Lo que puedes hacer con desestructuración, pero no es recomendable
Si necesitas un elemento en cierta posición, puedes utilizar la separación por comas para identificar la variable que necesitas.
```javascript
const array = [ 1, 2, 3, 4, 5 ]

const [ ,,,,  cinco ] = array

console.log(cinco) // 5
```
Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de objetos mediante el índice y utilizando un nombre para la variable.
```javascript
const array = [ 1, 2, 3, 4, 5 ]

const {4: cinco} = array

console.log(cinco) // 5
```

------------

## ES6: spread operator [8/35]<a name="id8"></a>

El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array.
```javascript
// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]
```
También se utiliza para objetos, pero esta característica fue añadida en versiones posteriores de ECMAScript y es denominada propiedades de propagación.

### Cómo copiar arrays utilizando el operador de propagación
Para realizar una copia de un array, deberás tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en la memoria del computador, al crear una copia, este tendrá la misma referencia que el original. Debido a esto, si cambias algo en la copia, también lo harás en el original.
```javascript
const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

originalArray // [0,2,3,4,5]
originalArray === copyArray  // true
```
Para evitar esto, utiliza el operador de propagación para crear una copia del array que utilice una referencia en memoria diferente al original.
```javascript
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false
```
### Cómo unir arrays y añadir elementos con el operador de propagación
Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un array.
```javascript
const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]

otherArray // [1,2,3,4,5,6,7]
```
#### Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para producir una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro del array a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia de memoria en la copia y en el original.
```javascript
const originalArray = [1, [2,3] ,4,5]
const copyArray = [...originalArray]

originalArray[1] === copyArray[1] // true
```
La manera de solucionar es más compleja, tendrías que emplear el operador de propagación para cada elemento en cada nivel de profundidad.
Sin embargo, recientemente salió una forma de producir una copia profunda con StructuredClone, aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.
```javascript
const originalArray = [1, [2,3] ,4,5]
const copyArray = structuredClone(originalArray)

originalArray === copyArray  // false
originalArray[1] === copyArray[1] // false
```
Este comportamiento también sucede para objetos dentro de otros objetos, u objetos dentro de arrays.

### Parámetro rest
El parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array.
Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.
```javascript
function hola (primero, segundo, ...resto) {
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5)
```
También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.
```javascript
const objeto = {
  nombre: "Andres",
  age: 23,
  plataforma: "Platzi"
}
const array = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
cons [cero, ...positivos] = array

usuario // { nombre: 'Andres', age: 23 }
positivos // [ 1, 2, 3, 4, 5 ]
```
#### Posición del parámetro rest
El parámetro rest siempre deberá estar en la última posición de los parámetros de la función, caso contrario existirá un error de sintaxis.
```javascript
// ❌ Mal
function hola (primero, ...rest, ultimo) { ... }
// SyntaxError: Rest element must be last element. 
```
Diferencias entre el parámetro rest y el operador de propagación
Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis, son diferentes.
El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, mientras que el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado.
```javascript
const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")
```

------------

## ES6: object literals [10/35]<a name="id10"></a>

Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre. Antes de ES6, para crear un objeto a partir de variables consistía en la siguiente manera:
```javascript
const nombre = "Andres"
const edad = 23

const objeto = {
    nombre: nombre, 
    edad: edad
}

objeto // { nombre: 'Andres', edad: 23 }
```
### Cómo utilizar objetos literales
Con los parámetros de objeto puedes obviar la repetición de nombres, JavaScript creará la propiedad a partir del nombre de la variable con su respectivo valor.
```javascript
const nombre = "Andres"
const edad = 23

const objeto = {nombre, edad}

objeto // { nombre: 'Andres', edad: 23 }
```
El resultado es el mismo, pero sin la necesidad de repetir palabras. Puedes combinarlo con variables que su propiedad tiene un nombre diferente.
```javascript
const nombre = "Andres"
const edad = 23
const esteEsUnID = 1

const objeto = {
    nombre, 
    edad,
    id: esteEsUnID
}

objeto // { nombre: 'Andres', edad: 23, id: 1 }
```

------------

## ES6: Promesas [11/35]<a name="id11"></a>

Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.

### Cómo utilizar las promesas
Solamente ten presente que la clase Promise y sus métodos then y catch fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con callbacks, llamado Callback Hell.

El argumento de la clase Promise es una función que recibe dos parámetros:

* resolve: cuando la promesa es resuelta.
* reject: cuando la promesa es rechazada.

Puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.
```javascript
const promesa = () => {
  return new Promise((resolve, reject) => {
    if (something) {
      //true o false
      resolve("Se ha resuelto la promesa")
    } else {
      reject("Se ha rechazado la promesa")
    }
  })
}

promesa()
  .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
  .catch(error => console.log(error)) //En caso que se ejecute reject
```
#### Cursos para entender el asincronismo en JavaScript
Si aún no sabes en qué consiste el asincronismo, no te preocupes, existen cursos completos de este tema.

* Curso de JavaScript Engine (V8) y el Navegador
* Curso de Asincronismo con JavaScript

------------

## ES6: module [13/35]<a name="id13"></a>
Para que el código de JavaScript sea más ordenado, legible y mantenible; ES6 introduce una forma de manejar código en archivos de manera modular. Esto involucra exportar funciones o variables de un archivo, e importarlas en otros archivos donde se necesite.

### Cómo utilizar los módulos de ECMAScript
Para explicar cómo funciona las exportaciones e importaciones de código, debes tener mínimo dos archivos, uno para exportar las funcionalidades y otro que las importe para ejecutarlas.

Además, si iniciaste un proyecto con NPM (Node Package Manager) con Node.js, necesitas especificar que el código es modular en el archivo package.json de la siguiente manera:
````javascript
// package.json
{   ...
    "type": "module"
}
````

#### Qué son las exportaciones de código
Las exportaciones de código consisten en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada export.

Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

Por ejemplo, en el archivo math_function.js declaramos una función para sumar dos valores, el cual lo exportaremos.
````javascript
//math_function.js
export const add = (x,y) => {
    return x + y
}
````
````javascript
//math_function.js
const add = (x,y) => {
    return x + y
}

export { add, otherFunction, ... }
````

#### Qué son las importaciones de código
Las importaciones de código consiste en usar funciones o variables de otros archivos mediante la palabra reservada import, que deberán estar siempre lo más arriba del archivo y utilizando el mismo nombre que el archivo original.

Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves { }.

Por ejemplo, importamos la función add del archivo math_function.js para utilizarla en un archivo main.js.
````javascript
// main.js
import { add, otherFunction } from './math_functions.js'

add(2,2) //4
````
Si importamos el módulo con un nombre diferente, existirá un error de sintaxis.
````javascript
// Erróneo
import { suma } from './math_functions.js'

suma(2,2) //SyntaxError: The requested module '/src/archivo1.js' does not provide an export named 'suma'
````
Para importar todas las funcionalidades de un archivo se utiliza un asterisco (*) y se puede cambiar el nombre para evitar la repetición de variables o funciones a través de la palabra reservada as.
````javascript
// main.js
import * as myMathModule from './math_functions.js';

myMathModule.add(2,2) //4
myMathModule.otherFunction()
...
````

#### Exportaciones por defecto
Si solo UN valor será exportado, entonces se puede utilizar export default. De esta manera no es necesario las llaves { } al exportar e importar.
````javascript
//math_function.js
export default function add (x,y){
    return x + y;
}
````
Adicionalmente, no se puede usar export default antes de declaraciones const, let o var, pero puedes exportarlas al final.
````javascript
// ❌ Erróneo
export default const add  = (x,y) => {
    return x + y;
}

// ✅ Correcto
const add  = (x,y) => {
    return x + y;
}

export default add
````

#### Importaciones por defecto
Si únicamente un valor será importado, entonces se puede utilizar cualquier nombre en la importación. De esta manera no es necesario las llaves { }.
````javascript
//Las siguientes importaciones son válidas
import  add  from './math_functions.js'
import  suma  from './math_functions.js'
import  cualquierNombre  from './math_functions.js'
````
Sin embargo, es recomendable utilizar siempre el nombre de la función, para evitar confusiones.

#### Combinar ambos tipos de exportaciones e importaciones
Teniendo las consideraciones de importaciones y exportaciones, nombradas y por defecto, entonces podemos combinarlas en un mismo archivo.
````javascript
// module.js
export const myExport = "hola"
function myFunction() { ... }

export default myFunction

// main.js
import myFunction, { myExport } from "/module.js"
````

------------

## ES6: generator [15/35]<a name="id15"></a>
Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

### Cómo utilizar generadores
La sintaxis de los generadores comprende lo siguiente:

* La palabra reservada function* (con el asterisco al final).
* La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
* Crear una variable a partir de la función generadora.
* El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.

Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.
````javascript
// Declaración
function* nombre(parámetros){
    yield (primer valor retornado)
    yield (segundo valor retornado)
    ...
    yield (último valor retornado)

}

//Crear el generador
const generador = nombre(argumentos)

// Invocacioens
generador.next().value //primer valor retornado
generador.next().value //segundo valor retornado
...
generador.next().value //último valor retornado
````

#### Ejemplo de un generador
Por ejemplo, creemos un generador para retornar tres valores.
````javascript
function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}
````

### Cómo utilizar for of y for in
Existen dos nuevas formas de utilizar ciclos repetitivos. El bucle for valor of iterable recorre iterables, como arrays, Map, Set e incluso un generador.

El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.
````javascript
const array = [5, 4, 3, 2, 1]

for (let numero of array) {
	console.log(numero) // 5 4 3 2 1
}
````
Sin embargo, debes tener en cuenta que solo podrás acceder a sus valores, y no a sus referencias, por lo que si quieres cambiar los elementos del array, necesitarás un índice array[indice].
````javascript
for (let numero of array) {
	valor *= 2 
	console.log(numero) // 10 8 6 4 2
}

console.log(array) // [ 5, 4, 3, 2, 1 ]
````
Si intentas recorrer un objeto de esta forma for elemento of objeto, te ocurrirá un error, porque un objeto no es un iterable. En su lugar puedes utilizar for elemento in objeto, que recorrerá las propiedades del objeto.
````javascript
const objeto = { a: 1, b: 2, c: 3 }

for (let elemento in objeto) {
	console.log(elemento) // 'a' 'b' 'c'
}
````
Sin embargo, si utilizas for elemento in array, no dará un error, pero el resultado no será el esperado, ya que los arrays son un tipo de objeto donde cada propiedad es el índice del valor del array o del iterable. Por lo que debes tener cuidado.
````javascript
const array = [5, 4, 3, 2, 1]

for (let elemento in array) {
  console.log(elemento) // '0' '1' '2' '3' '4'
}

/* const array = {
	'0': 5,
	'1': 4,
	'2': 3,
	'3': 2,
	'4': 1
}*/
````

------------

## ES6: set-add [17/35]<a name="id17"></a>
Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

### Cómo utilizar los Sets
Para iniciar un Set, se debe crear una instancia de su clase a partir de un iterable. Generalmente, un iterable es un array.
````javascript
const set = new Set(iterable)
````
### Cómo manipular los Sets
Para manipular estas estructuras de datos, existen los siguientes métodos:
* add(value): añade un nuevo valor.
* delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
* has(value): retorna un booleano si existe o no el valor dentro del Set.
* clear(value): elimina todos los valores del Set.
* size: retorna la cantidad de elementos del Set.

------------

## ES7: exponentiation operator y array includes [18/35]<a name="id18"></a>

La siguiente versión de ECMAScript fue publicada en 2016. Las siguientes características de ES7 o ES2016 que aprenderás son: el método includes de arrays y el operador de potenciación.

### Operador de potenciación
El operador de potenciación (exponential operator) consiste en elevar una base a un exponente utilizando el doble asterisco (**).
base ** exponente

Por ejemplo, el cubo de 2 es igual a 8, matemáticamente expresado sería: $2^3=8$.
````javascript
const potencia = 2**3

console.log(potencia) // 8
````
### Método includes
El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos:
* El elemento a comparar.
* El índice inicial desde donde comparar hasta el último elemento.

#### Índices positivos y negativos
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.
````javascript
[0,1,2,3, ...., lenght-1]
````
Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.
````javascript
[-lenght, ...,  -3, -2, -1]
````
#### Ejemplos utilizando el método includes
El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.
````javascript
//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true
````

````javascript
// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true
````

------------

## ES8: object entries y object values [19/35]<a name="id19"></a>

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

## ES8: string padding y trailing commas [20/35]<a name="id20"></a>
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

## ES8: funciones asíncronas [21/35]<a name="id21"></a>
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

## ES9: expresiones regulares [22/35]<a name="id22"></a>
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

## ES9: Promise.finally [23/35]<a name="id23"></a>
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

## ES10: flat-map y trimStart-trimEnd [24/35]<a name="id24"></a>
La siguiente versión de ECMAScript fue publicada en 2019. A continuación aprenderás sobre aplanamiento de arrays y eliminar espacios en blanco de un string.

### Qué es el aplanamiento de arrays
El aplanamiento consiste en transformar un array de arrays a una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.

#### Método flat
El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.
Este método recibe un argumento:

* La profundidad del aplanamiento, por defecto, tiene un valor de 1.

Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.
````javascript
const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
````
#### Método flatMap
El método flatMap es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

Este método recibe los mismos argumentos que el método map.
````javascript
const strings = ["Nunca pares", "de Aprender"]
strings.map(string => string.split(" ")) 
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
strings.flatMap(string => string.split(" ")) 
// [ 'Nunca', 'pares', 'de', 'Aprender' ]

const numbers = [1,2, 3, 4]
numbers.map(number => [number * 2]) 
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number
````
### Eliminar espacios en blanco de un string
Existen tres métodos para eliminar espacios en blanco de un string:

* El método trim elimina los espacios en blanco al inicio y al final.
* El método trimStart o trimLeft elimina los espacios al inicio.
* El método trimEnd o trimRight elimina los espacios al final.

````javascript
const saludo = "      hola      "
const result1 = saludo.trim()
const result2 = saludo.trimStart()
const result3 = saludo.trimEnd()

result1 // 'hola'
result2 // 'hola      '
result3 // '      hola'
````

------------

## ES10: try catch y fromEntries [25/35]<a name="id25"></a>
Las siguientes características de ES10 o ES2019 que aprenderás son: parámetro opcional de catch y un método para tranformar arrays a objetos

### Parámetro opcional de catch
El parámetro opcional de catch permite omitir el error si es necesario.
````javascript
try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}
````
Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.

### Cómo transformar un array de arrays en un objeto
El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries().
````javascript
const arrayEntries = [
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
] 

const usuario = Object.fromEntries(arrayEntries) 

console.log(usuario)
/* {
  name: 'Andres',
  email: 'andres@correo.com',
  age: 23
} */
````

------------

## ES11: optional chaining [26/35]<a name="id26"></a>
Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará undefined.
````javascript
const usuario = {}
console.log(usuario.redes) // undefined
````
Al acceder a una propiedad más profunda de un objeto, que previamente fue evaluada como undefined, el programa se detendrá y mostrará un error de tipo.
````javascript
const usuario = {}
console.log(usuario.redes.facebook) 
// TypeError: Cannot read properties of undefined (reading 'facebook')
````
Es como intentar ejecutar undefined.facebook, lo cual es un error de tipo, debido a que undefined es un primitivo, no es un objeto.

### Cómo utilizar el encadenamiento opcional
El encadenamiento opcional u optional chaining (?.) detiene la evaluación del objeto cuando el valor es undefined o null antes del (?.), retornando undefined sin detener el programa por un error.
````javascript
const usuario = {}
console.log(usuario.redes?.facebook) 
// undefined
````
Pero, ¿por qué usaría propiedades de un objeto vacío? Cuando realizas peticiones, el objeto no contiene la información solicitada en seguida, por ende, necesitas que el programa no colapse hasta que lleguen los datos y puedas utilizarlos.

#### No abuses del encadenamiento opcional
El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.

Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.

Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría "ocultarlo" por un undefined, provocando que el debugging sea más complicado.

------------

## ES11: BigInt y Nullish [27/35]<a name="id27"></a>
Las siguientes características de ES2020 o ES11 que aprenderás son: nuevo tipo de dato bigint y operador Nullish Coalescing (??).

### Big Int, enteros muy grandes
El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt
````javascript
const number1 = 45n
const number2 = BigInt(45)

typeof 45n // 'bigint'
````
JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER.
````javascript
const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991
````
Después de los límites, los cálculos muestran resultados erróneos. Los bigint ayudan a manejar operaciones de enteros fuera de los límites mencionados.
````javascript
const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

console.log(number) // 9007199254740992
console.log(bigInt) // 9007199254740993n
````
Se añade la misma cantidad a ambos tipos de datos, sin embargo, el tipo numérico da un resultado diferente al esperado.

### Operador Nullish Coalescing
El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.

El siguiente ejemplo se lee como: ¿usuario.name es undefined o null? Si es así, asígnale un valor por defecto "Andres", caso contrario asigna el valor de usuario.name.
````javascript
const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'
````
#### Diferencia entre el operador OR y el Nullish coalescing
El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.

Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no sea null o undefined. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.
````javascript
const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log( orId ) //  'Sin id'
console.log( nullishId ) // 0
````

------------

## ES11: Promise.allSettled [28/35]<a name="id28"></a>
En alguna situación necesitarás manejar varias promesas y obtener sus resultados. ¿Cómo? Utilizando los métodos Promise.all y Promise.allSettled.

### Promise.all
El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas.
````javascript
Promise.all([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
````
El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas. Si al menos una promesa es rechazada, Promise.all será rechazada.

### Promise.allSettled
Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.
````javascript
const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.resolve("Promesa 2")
const promesa3 = Promise.reject("Ups promesa 3 falló")

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))

/* [
  {
    status: 'rejected',
    reason: 'Ups promesa 1 falló'
  },
  { 
    status: 'fulfilled', value: 'Promesa 2' 
  },
  {
    status: 'rejected',
    reason: 'Ups promesa 3 falló'
  }
] */
````
¿Debería usar Promise.allSettled en lugar de Promise.all? 
No, porque ambas son muy útiles dependiendo cómo quieras manejar tus promesas.

------------

## ES11: globalThis y matchAll [29/35]<a name="id29"></a>
Las siguientes características de ES2020 que aprenderás son: el objeto global para cualquier plataforma y el método matchAll para expresiones regulares.

### Objeto global para cualquier plataforma
El motor de JavaScript, aquel que compila tu archivo y lo convierte en código que entiende el computador, al iniciar la compilación crea un objeto global.

El objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno. Dependiendo la plataforma, este objeto global tendrá un nombre diferente.

En el navegador el objeto global es window, para Node.js es global, y así para cada entorno. Sin embargo, en Node.js no podrás acceder a window, ni en el navegador podrás acceder a global.

Para estandarizar el objeto global se creó globalThis, un objeto compatible para cualquier plataforma.
````javascript
// Ejecuta el siguiente código y observa que muestra
console.log(window)
console.log(globalThis)

// En el navegador
window === globalThis // true

// En Node.js
global === globalThis // true
````
### Método matchAll para expresiones regulares
El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento.
````javascript
string.matchAll(regex)
````
En el iterable, existe una propiedad denominada index con el índice del string donde la búsqueda coincide.
````javascript
const regex = /\b(Apple)+\b/g

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

// Tranformación del iterable retornado a array
const array = [...fruit.matchAll(regex)]
console.log(array)
/*
[
  [
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ],
  [
    'Apple',
    'Apple',
    index: 21,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ]
]
*/
````

------------

## ES11: optional chaining [30/35]<a name="id30"></a>
La expresión import() permite manejar módulos dinámicamente, ya que la sintaxis de ECMAScript import ... from ... no lo permite.

### Cómo utilizar importación dinámica
La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicación. Esto permite que la página web sea más rápida, porque descarga menos recursos.

La expresión import() recibe un argumento de tipo string con la ruta del módulo a importar y devuelve una promesa.
````javascript
const ruta = "./modulo.js"

// Utilizando promesas
import(ruta)
    .then( modulo => {
        modulo.funcion1()
        modulo.funcion2()
    })
    .catch(error => console.log(error))
    
// Utilizando async/await
async function importarModulo(rutaDelModulo) {
    const modulo = await import(rutaDelModulo)
    modulo.funcion1()
    modulo.funcion2()
}

importarModulo(ruta)
````
#### Ejemplo utilizando importación dinámica
De esta manera puedes utilizar una importación dinámica en tu aplicación para desencadenar una descarga de un módulo cuando el usuario lo vaya a utilizar. Por ejemplo, al realizar clic en un botón.
````javascript
const boton = document.getElementById("boton")

boton.addEventListener("click", async function () {
    const modulo = await import('./modulo.js')
    modulo.funcion()
})
````
Puedes usar las herramientas de desarrollador para visualizar la descarga de archivos al realizar clic en el botón.

------------

## ES12: numeric-separators y replaceAll [31/35]<a name="id31"></a>
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

## ES12: promise-any y métodos privados [32/35]<a name="id32"></a>
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

## ES13: at [33/35]<a name="id33"></a>
El método at de arrays sirve para acceder a los elementos a partir del índice.
````javascript
array.at(índice)
````
### Índices positivos y negativos en arrays
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. El índice 0 es la primera posición.
````javascript
[0, 1, 2, 3, ...., lenght-1]
````
Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda. El índice -1 es la última posición.
````javascript
[-lenght, ...,  -3, -2, -1]
````
### Cómo utilizar el método at
La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes.
````javascript
const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

nombres.at(-1) // "Richard"
nombres[-1] // undefined
nombres.at(-3) // "Ana"
nombres[nombres.length -1] // "Richard"
````
Puedes utilizar la notación de corchetes, pero necesitas obtener la longitud del array y restarle una unidad, generando mucho código que puede volverse difícil de leer.
````javascript
nombres[nombres.length -1] // "Richard"
````

------------

## ES13: top level await en el consumo de una API [34/35]<a name="id34"></a>
Top level await permite utilizar la palabra reservada await, sin estar dentro de una función asíncrona con async. Sin embargo, únicamente se puede utilizar await en la parte superior del archivo de un módulo.
### Cómo utilizar top level await
Anterior a ECMAScript 13, cuando se introdujo funciones asíncronas, si utilizabas await fuera de async, existirá un error de sintáxis.
````javascript
// Error
await fetch(URL)
// SyntaxError: await is only valid in async function
````
Ahora, con top level await esto es posible, sin ningún error. Esto puede servir para importaciones de manera dinámica o iniciar la conexión de tus bases de datos. Siempre y cuando respetes que debe estar en la parte encima del archivo de tipo módulo.

------------