/*Operadores se utiliza para realizar operaciones
se dividen en 3 tipos operadores 

*/

//1. operadores aritmeticos
let A=5
let B=10
console.log(A+B) //suma
console.log(A-B)// resta
console.log(A/B)// division
console.log(A*B)// multiplicacion

//modulo es el resto de la division- operador aritmetico

console.log(A%B)//modulo
console.log(A**B)//exponecial

A++ // Incremento
console.log(A++)

B--//Decremento
console.log(B--)

// Operadores de asignacio
let myVariable=2
console.log(myVariable)
myVariable +=2
console.log(myVariable)

myVariable *=2
myVariable /=2
myVariable -=2
myVariable %=2
myVariable **=2

//Operadores de comporaciones, este sirve para comparar
console.log(A)

console.log(A > B)
console.log(A < B)
console.log(A >= B)
console.log(A <= B)
console.log(A == 7) //igual por valor es lo que comparo
console.log(A =="7") //Igualdad por valor

//Igualdad por identidad ( por tipo y valor)
console.log(A == A)
console.log(A === 7)
console.log(A === "7")

// Operador por desigualdad
console.log(A != 7) 
console.log(A !== "7")// a igual a 7 a nivel de identidad

//Comparacion 
console.log(0==false)
console.log(1==false)

console.log(0=="")
console.log(0==" ")
console.log(0=='')
console.log(0=='hola')
console.log(0==="")
console.log(undefined==null)
console.log(undefined===null)

//truthy values (valores verdades)
// todos los numeros positivos y negativos menos el cero
// todas las cadenas de texto menos las vacias
// todos los boolean

//todos los falsy values ( valores falsos)
/*
0 
0n
null
underfined
naN
El boolean false
cadenas de textos vacias

*/

// Tipo de Operador Logico 
// sirve para comparar valores booleanos

//and (&&)

console.log(5 > 10 && 15 >20)
console.log(5< 10 && 15 <20)
console.log(5< 10 && 15 >20)
console.log(5> 10 && 15 >20 && 30 > 40)

//Operador Or (||)

console.log(5 > 10 || 15 >20)
console.log(5< 10 || 15 <20)
console.log(5< 10 || 15 >20)
console.log(5> 10 || 15 >20 || 30 > 40)

console.log(5>10 && 15>20 || 30 <40) // conbinaciones de operadores or y and


// Operador logico Not(!)

console.log(!(5 > 10 && 15 >20)) // se usa el ! para invertir todo lo que esta dentro del primer parentesis
console.log(!(5 > 10 || 15 >20))

// para que se entienda mejor lo que se hizo arriba
console.log(!true)
console.log(!false)

//Operadores temarios
// este basicamente actua como una condicional,
//  acede a la variable q se quiere inspeccionar ,
//  si se cumple ( verdadero)y si no se cumple se imppre lo q esta despues del punto.

const  israining= true

israining ? console.log("esta lloviendo"): console.log("no esta lloviendo")

