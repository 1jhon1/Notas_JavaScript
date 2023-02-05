function miFuncion(a, b){
    console.log('la suma es : '+ (a+b))
}
miFuncion(35,65);


function miFuncionDos(a, b){
    return a + b;
}
//utilizar return
let resultado = miFuncionDos(2,3)
console.log(resultado);


// funciones de tipo expresion
let sumar = function (a, b){return a +b};
resultado = sumar(91,9);
console.log(resultado);


//Funciones de tipo flecha 
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(5,5)
console.log(resultado); 

// paso por valor
let x = 10;

function cambiarValor(c){
    c=20;
}

console.log(x);
console.log(cambiarValor(x));

// paso por referencia

const Persona ={
    nombre : 'Jhon',
    apellido: 'Hernandez'
}

console.log(Persona)

function cambiarObjeto(p1){
    p1.nombre = 'Jader';
    p1.apellido ='Perneth'
}
 cambiarObjeto( Persona );
 console.log(Persona)