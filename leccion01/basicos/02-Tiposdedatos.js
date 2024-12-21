// Tipos de datos o dataType

/* los tipos de datos primitivos, son los datos basicos del Lp
 solo representan un solo valor y son inmutables 
 */


// cadenas de textos ( string)

let Myname=" greizel sension"
let alias= 'greiz'
let emmail= `sensiongreizel@gmail.con`

//numeros
let age= 37 // enteros 
let height=1.77 // decimal

//Boleanos(boolean)
let isTeacher= true
let isStudent=false

//Undefined(tipo de dato no definido)
/* significa que la variable la hemos declarado pero aun no le asignamos valor
se usa en el caso que a medidas que avance el programa podras necesitarla
*/

let Undefinedvalue
console.log(Undefinedvalue)

//Null
/* representa que intencionalmente la variable la pongo sin valor o nula. despues puede que tenga un valor o no.
*/
let nullvalue = null

// Symbol
/*es un tipo de dato primitivo , representaan valores unicos, utiles para crear objetos
 */

let mySymbol = Symbol("MySymbol")


// big Int 
 /*lo utilizamos cuando tenemos un  numero demaciado grande y usamos el bigint
 podemos usar toda la memoria son extremedamente grande */

let MyBigInt=BigInt(80000078000090005566732299999)
let MyBigInt2=8746579200113333333333333333333333333n

// mostramos el tipo de dato

console.log(typeof Myname)
console.log(typeof alias)
console.log(typeof emmail)

console.log(typeof age)
console.log(typeof height)
console.log(typeof isTeacher)
console.log(typeof  isStudent)

console.log(typeof undefined)
console.log(typeof null)

console.log(typeof MyBigInt)
console.log(typeof MyBigInt2)
