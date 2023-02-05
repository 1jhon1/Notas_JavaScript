// El metodo call es para aplicar un metodo en otro objeto donde no este definido

let persona1 = {
    nombre:'Jhon',
    apellido:'Jader',
    nombreCompleto : function(){
        return this.nombre +' '+ this.apellido;
    }
}

let persona2 ={
    nombre: 'Benjamin',
    apellido:'Hernandez'
}

console.log(persona1.nombreCompleto.call(persona2));