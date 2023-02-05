let resultado = (4 > 3) ? "Verdadero" : "Falso"
console.log(resultado);

let mayorDeEdad = 18
let edad = 17 >= mayorDeEdad ? "Es mayor de Edad" : "Es menor de Edad"
console.log(edad)


let miNumero = '18';
let Edad = Number(miNumero);

let votar = Edad >= 18 ? "Puede Votar" : "Muy joven para votar"
console.log(votar);

//validando que sea numero la variable

let num = '20';
let numero = Number(num);

if (isNaN(num)) { //isNaN es si no es un numero 
    console.log("El valor ingresado no es numerico")
}
else {
    let miEdad = num >= 18 ? "Mayor de Edad" : "Menor de Edad";
    console.log(miEdad);

}