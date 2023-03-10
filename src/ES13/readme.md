# Resumen de cada clase

## Índice
* [ES13: at](#id1)
* [ES13: top level await en el consumo de una API](#id2)

------------

## ES13: at [33/35]<a name="id1"></a>
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

## ES13: top level await en el consumo de una API [34/35]<a name="id2"></a>
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