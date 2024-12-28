/*
Clase 28 - Ejercicios: Estructuras
*/

// 1. Crea un array que almacene cinco animales
 let miArreglo=[]

 miArreglo=[5]
 myArreglo= new Array(5) 
miArreglo=["leon", "tigre","mono", "serpiente","gato"]
console.log(miArreglo)

// 2. Añade dos más. Uno al principio y otro al final
miArreglo.unshift("perro")
miArreglo.push("conejo")

console.log(miArreglo)

// 3. Elimina el que se encuentra en tercera posición.

miArreglo.splice(3,1)//elimine el del indice 3, en base a uno
console.log(miArreglo)

// 4. Crea un set que almacene cinco libros
let MiBiblioteca =new Set()
//console.log(MiBiblioteca)

 MiBiblioteca = new Set(["tu no eres el problema","hasta que te caigas bien","perderte para encontrarte", "querida yo","el gin y gan"])
 console.log(MiBiblioteca)
 
//5.  Añade dos más. Uno de ellos repetido
MiBiblioteca.add("tu no eres el problema")
MiBiblioteca.add("de mi para mi") 
console.log(MiBiblioteca)

// 6. Elimina uno concreto a tu elección
MiBiblioteca.delete("el gin y gan")
console.log(MiBiblioteca)


// 7. Crea un mapa que asocie el número del mes a su nombre.
 
let miMapMes = new Map()
console.log(miMapMes)

// Inicializacion
miMapMes= new Map([
    ["1", "enero "],
    ["2", "febrero"],
    ["3","marzo"],
    ["4","abril"]
]);
console.log(miMapMes)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(miMapMes.has("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
const mesesVerano = ['junio', 'julio', 'agosto'];
miMapMes.set('meses de verano', mesesVerano);
console.log(miMapMes)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 =["uno", "dos", " tres"]
myset1= new Set(myArray2)
console.log(myset1)

let myMap2 = new Map();
myMap2.set(myset1);
console.log("se almaceno el set en un MAP:",myset1)
// map completo 
console.log("Map con el Set:", myMap2);
