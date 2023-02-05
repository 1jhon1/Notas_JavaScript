const autos = ['Toyotas','Hiuday','Mazda','BMW'];
console.log(autos);

//acceder a elementos 
console.log(autos[2]);

//reccorrer un arreglo forma 1
for(i =0 ; i < autos.length; i++){
    console.log(autos[i])

}

//Modificar los valores de un arreglo 
autos [1] = 'Ferrari';
console.log(autos[1]);

//Agregar elementos a un arreglo()
autos.push('Audi');
console.log(autos)

//Agregar elementos a un arreglo()
autos[autos.length] = 'Cadilac';
console.log(autos)

//Agregar elementos a un arreglo()
autos [6] = 'Porshe';
console.log(autos)

//saber si es un array
console.log(Array.isArray(autos))
