
let persona = {
    nombre : 'Jhon',
    apellido: 'Hernandez',
    edad: '23',

//creando metodo dentro del objeto
   nombreCompleto: function(){
  return this.nombre +' '+this.apellido;
}

}



//accediendo al objeto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto())

//otra forma de acceder
console.log(persona['nombre']);

//recorrer el objeto cin for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}


//agregar mas propiedades
persona.profesion = 'Ing. Sistemas';
console.log(persona);

//eliminar propieda y valor
delete persona.profesion;
console.log(persona);

//get obtiene y set modifica

let persona2 ={
    nombre2 : 'Jader',
    apellido :'Perneth',
    idioma:'es',
    get lang(){
        return this.idioma.toLocaleUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto2(){
        return this.nombre2 +' '+this.apellido;
    },

}

//acceder a persona2
console.log(persona2.nombreCompleto2);
console.log(persona2.lang);
persona2.lang = 'us';
console.log(persona2.idioma);
