let a = 3, b = 2, c = '3';

let z = a == c; // se revisa el valor sin importar el tipo
console.log(z);

z = a === c; // se revisa los valores pero tambien el tipo 
console.log(z);