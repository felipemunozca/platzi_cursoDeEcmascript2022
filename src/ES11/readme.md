# Resumen de cada clase

## Índice
* [ES11: optional chaining](#id1)
* [ES11: BigInt y Nullish](#id2)

------------

## ES11: optional chaining [26/35]<a name="id1"></a>
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

## ES11: BigInt y Nullish [27/35]<a name="id2"></a>
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