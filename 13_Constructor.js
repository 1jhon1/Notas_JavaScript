/* El constructor es una función con parametro pero que contiene la palabra reservada this,
 con el constructor podemos crear varios objetos y reutilizar su estructura*/

//Constructor

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

//protopype nos permite pasarle atributos y valores por defecto a todos los objetos creados
Persona.prototype.tel = 123456789;

let padre = new Persona('Jhon', 'Hernandez', 23);
//modificando la propiedad por defecto de tel
padre.tel = 123456;
console.log(padre.tel);

let esposa = new Persona('Ludy', 'Banda', 22);
console.log(esposa.tel);

