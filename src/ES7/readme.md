# Resumen de cada clase

## Índice
* [ES7: exponentiation operator y array includes](#id1) 18/35

------------

## ES7: exponentiation operator y array includes [18/35]<a name="id1"></a>

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