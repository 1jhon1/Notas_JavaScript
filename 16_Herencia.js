
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
   
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' '+this._apellido;
    }
    
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);//llamamos al constructor de la otra clase
        this._departamento = departamento;
    }


    get departamento(){
        return this._departamento;        
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobre escritura para traer el departamento en la clase padre
    nombreCompleto(){
        return super.nombreCompleto() +','+ this._departamento;
    }


}

let empleado1 = new Empleado('Jhon','Hernandez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
