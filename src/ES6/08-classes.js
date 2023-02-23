/**
 * CLASE 12: ES6: clases
 * 
 * Las clases son "funciones especiales". 
 * La sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones de clases.
 * Fue introducido en EcmaScript 2015 (es lo mismo que decir ES6).
 * Es una mejora a la herencia.
 * 
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
 */


/**** EJEMPLO 1 ****/

    // Las clases se declaran con la palabra reservada "class"
    class User {}

    // Instancia de una clase.
    const newUser = new User();


    class Usuario {
        //dentro de la clase declaro los metodos que tendra la clase.
        saludar() {
            return 'Hola';
        }
    }

    //Para llamar al metodo saludar(), creo una instancia de la clase y luego hago uso del metodo que cree.
    const felipe = new Usuario();
    console.log(felipe.saludar());
    // Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
    // Hola

    //utilizando la HERENCIA puedo hacer una nueva referencia a la misma clase.
    const cristobal = new Usuario();
    console.log(cristobal.saludar());



/**** EJEMPLO 2 ****/

    //El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
    //se declara con la palabra reservada constructor().

    class usuario {
        constructor() {
            console.log('Nuevo usuario');
        }

        //agrego la funcion creada antes.
        saludar() {
            return 'hola';
        }
    }

    const oscar = new usuario();
    // Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
    //Nuevo usuario



/**** EJEMPLO 3 ****/

    // this hace referencia al elemento padre que lo contiene.

    class usuario {
        constructor(nombre) {
            //nombre sera igual al valor que recibo como parametro y que sera hijo de la clase usuario.
            this.nombre = nombre;
        }
        //metodos.
        hablar() {
            return 'Hola';
        }
        saludar() {
            //creo una nueva respuesta utilizando template literals. Puedo invocar tanto un metodo como un parametro para retornar una respuesta.
            return `${this.hablar()} ${this.nombre}`;
        }
    }

    //se instancia un nuevo usuario, y luego se imprime la respuesta llamando al metodo saludar()
    const ana = new usuario('Ana');
    console.log(ana.saludar());
    // Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
    // Hola Ana



/**** EJEMPLO 4 ****/

    //getter y setter
    //permiten tener acceso a leer o modificar el atributo de un objeto. 
    //Get : para mostrar el nombre del atributo y 
    //Set : para modificar ese atributo

    class usuario {
        //creo el constructor, esta vez recibira dos parametros.
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }

        //se declaran los metodos.
        hablar() {
            return 'Hola';
        }
        saludar() {
            return `${this.hablar()} ${this.nombre}`;
        }

        //get y set
        //utilizando la palabra reservada get, creo un parametro para retornar y leer el valor de edad que reciba la clase cuando sea ejecutada.
        get suEdad(){
            return this.edad;
        }
        //utilizando la palabra resevada set, y le paso un nuevo parametro con el valor que espero cambiar y le digo que ahora el valor de edad sera igual al de numero.
        set suEdad(numero){
            this.edad = numero;
        }
    }

    //instancio la clase y le paso los valores de nombre y edad.
    const david = new usuario('David', 15);
    //utilizo la consola para mostrar el valor que esta contenido en suEdad.
    console.log(david.suEdad);
    //utilizo la consola para asignar y cambiar el valor que tenia suEdad.
    console.log(david.suEdad = 20);
    // Si selecciono el codigo y lo ejecuto con Run code, la respuesta en la consola sera:
    // 15
    // 20


/**
 * APUNTES DE COMPAÑEROS
 * 
En palabras sencillas, una clase es un plantilla para crear objetos con sus mismos atributos y métodos (atributos se refieren en el código como las variables, y los métodos como las funciones; todo esto dentro del objeto).
Como ejemplo podemos visualizar las Clases, como moldes para hacer galletas y sus objetos como las galletas ya listas para su consumo. Aunque debido a su molde (clase) todas las galletas (objeto), tendrían la misma forma cada galleta puede tener gomitas, otras crema, entre muchas otras, esto de les podría llamar los atributos de nuestros objetos (galletas).

 - Una INSTANCIA de una CLASE: se refiere al objeto creado a partir de la clase.
 - La sintaxis que utiliza la clase es la siguiente :

//Se declara la clase:

    class NombredelaClase {
        //atributos y metodos
    }

//Se crea una instancia (objeto), de la clase:

const NuevoObjeto = new NombredelaClase();
El profe Oscar inicia desde los métodos(una función), para explicarnos como crear la instancia (objeto) de la clase User(molde), de la siguiente manera:

    class User {
        //Metodos
        greeting(){
            return 'Hello';
        }
    };

El método greeting es una función, para métodos prácticos vamos a utilizar el nombre ‘Pepe’ en vez de llamar el objeto ‘gndx’.

Se crea el objeto a partir de la clase User y se llama el método para mostrarla en consola de la siguiente manera:

    const pepe = new User();
    console.log(pepe.greeting()); // Hello

Se declara el nuevo objeto ‘pepe’ a partir de la clase user, y se llama a la función greeting dentro de nuestro objeto ‘pepe’. En consola tenemos el ‘Hello’.

Cuando se refiere a la herencia, en este caso de las clases, significa que la clase puede tener varios objetos de diferente nombre pero con los mismos atributos y métodos de la misma.

La palabra reservada ‘new’, es un constructor, que sirve para crear objetos personalizados.

El this, básicamente en palabras mas sencillas es decirle a tu código que cuando le escribes this, es en el contexto, llámese dentro de una función, dentro de un objeto, que de este mismo requieras. En las clases no es lo mismo traer la asignación de un atributo del padre (molde), que la asignación de atributo de un hijo (galletas), aunque tengan un mismo atributo.

En un ejemplo mas practico vamos a recrear un poco un juego (Mario Bros) y vamos a crear con una clase ‘Player’ a nuestros personajes como ‘player1’ a Mario y a ‘player2’ como a Luigi. Vamos tomar como atributos nombre y colorSombrero, por ahora, y el método de saludar.

    class Player {
        constructor(nombre, colorSombrero){
            //atributos con su contexto
            this.nombre = nombre;
            this.colorSombrero = colorSombrero;
        }
        //Metodos
        saludar(){
            return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
        }
    }
    //Creacion de jugadores (Objetos)

    let player1 = new Player('Mario','Rojo');
    let player2 = new Player('Luigi', 'Verde');

    console.log(player1);   //Player {nombre: 'Mario', colorSombrero: 'Rojo'}
    console.log(player1);   //Player {nombre: 'Luigi', colorSombrero: 'Verde'}

    //Llamar metodos de los jugadores (Objetos)
    console.log(player1.saludar());     // Hola soy Mario y mi sombrero es Rojo

Los metodos Get y Set nos permiten tener acceso a leer o modificar el atributo de un objeto. Siendo Get, para mostrar el nombre del atributo y Set, para modificar ese atributo.En el ejemplo del juego:

    class Player {
        constructor(nombre, colorSombrero){
            this.nombre = nombre;
            this.colorSombrero = colorSombrero;
        }
        //Metodos
        saludar(){
            return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
        }
        get nombre(){
            return this.nombre;
        }
        set nombre(nuevoNombre){
            this.nombre = nuevoNombre;
        }
    }

    //GET
    console.log(player1.nombre);    // Mario
    //SET 
    player1.nombre = 'Alberto';
    console.log(player1.nombre);    // Alberto
 * 
 */