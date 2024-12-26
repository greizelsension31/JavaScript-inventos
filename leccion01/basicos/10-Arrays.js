
// Arrays
/*
Estructura de datos: arrays,son utilies cuando quieres manejar listados: Numeros, Textos
*/

// como declaramos un arrays

let myArray = []// recomendable usar este, en vez de la segunda, porque minimiza errores y es mas eficiente
let myArray2 = new Array()// nos rive para hacer lo mismo que arriba 

console.log(myArray)
console.log(myArray2)

// inicializacion
 myArray=[3]
 myArray2= new Array(3)// esta manera es para reservar espacio o memoria. esta la referencia de reservacion arrays mas puro, nativo.

console.log(myArray)
console.log(myArray2)

myArray=[1,2,3,4]
myArray2= new Array(1,2,3,4)// esta manera es para reservar espacio o memoria. esta la referencia de reservacion arrays mas puro, nativo.

console.log(myArray)
console.log(myArray2)

// otra manera de usarlo y que salga igual que el array con[]

myArray=["grei"," mayleny","sension", "guerra", 27, true]// es de tipado dinamico, significa que puede adptar cualquier valor
myArray2= new Array("grei"," mayleny","sension", "guerra", 27, true)// esta manera es para reservar espacio o memoria. esta la referencia de reservacion arrays mas puro, nativo.

console.log(myArray)
console.log(myArray2)

// asignar valores con array 2, se cuenta de desde 0

myArray2= new Array(3)
myArray2[0]=" greizel"
//myArray2[1]=" mayle"
myArray2[2]=" sensi"
myArray2[4]=" sensi"
console.log(myArray2) // el listado es ordenado, cada cosa esta en su posicion

// asignar valores con array 1, se cuenta de desde 0

myArray= []
myArray[0]=" greizel"
//myArray2[1]=" mayle"
myArray[2]="sensi"
console.log(myArray) // el listado es ordenado, cada cosa esta en su posicion

// metodos comunes aplicados a la arrays
myArray=[]
// push : es cuando quieres meter algo en el array

myArray.push("soy")
myArray.push("creativa")
myArray.push("Divertida")
myArray.push("y fabulosa")

console.log(myArray)

// Pop: elimina el ultimo elemento de la array

console.log(myArray.pop())// elimina y devuelve tambien en pantalla cual fue el ultimo elemento que elimino

myArray.pop()// elimina el ultimo elemento de la array
console.log(myArray)


// shitf : elimina el primer elemento del array y lo devuelve

console.log(myArray.shift())
console.log(myArray)

// el unshift : lo que sirve para agregar uno o mas elementos al principio del arrays.

myArray.unshift("ingeniosa","inteligente")
console.log(myArray)

// legth : es una propiedad no una funcion, algo que dentro de myarray contiene un valor

console.log(myArray.length)

//clear: como somos capaces de borrar un array

myArray=[]
myArray.length=0 // este es alternativa, pero mejor es hacerla como la linea 88 que la inicializa en vacia[]
console.log(myArray)

// slice: basicamente devuelve una copia  de una porcion de nuestro array
myArray.push("grei"," mayleny","sension", "guerra", 27, true)
let myNewArray=myArray.slice(1,3)// le estamos diciendo quiero este pedazo desde el elemento desde el 1 hasta el 2 , el 3 no lo tomo encuenta.
console.log(myNewArray)

//splice: 
myArray.splice(1,3)
console.log(myArray)

myArray= ["grei"," mayleny","sension", "guerra", 27, true]

myArray.splice(1,2," nuevo elemento")// lo que hicimos es que desde la posicion 1 anadimos en la posicon 2 el elemento nuevo.
console.log(myArray)