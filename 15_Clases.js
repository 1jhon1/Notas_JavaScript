class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Jhon','Apellido');
console.log(persona1)

let esposa = new Persona('Ludy','Banda');
console.log(esposa)


//usando get y set
console.log(persona1.nombre);
persona1.nombre = 'Jader';
console.log(persona1.nombre)