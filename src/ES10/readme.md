# Resumen de cada clase

## Índice
* [ES10: flat-map y trimStart-trimEnd](#id1)

------------

## ES10: flat-map y trimStart-trimEnd [24/35]<a name="id1"></a>
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