//Ejercicios

// 1. Crea una vaiable para cada operacion aritmetica.

let num1 = 2
let num2 = 20
console.log(num1+num2)

let a =30
let b= 15
console.log(a-b)

let T =70
let N = 30
console.log(T/N)

let edad =  27
let years = 1998
console.log(edad/years)

let num3= 40
let num4= 10
console.log(num3*num4)

const numero1 =30
const numero2= 5
console.log(numero1%numero2)

let nu1=50
let nu2=12
console.log(nu1**nu2)

//operador de  incremento
let A =5
A++
console.log(A++)

// decremento
B= 4
B--
console.log(B--)

// 2 Crea una variable para cada tipo de operacion de asignacion, 
// que haga uso de las variables utilizadas  para las operaciones aritmeticas
console.log(A, " el valor de A despues del incremento")
let miVariable= 5
console.log(miVariable)
miVariable+=A
console.log(miVariable,"mi variable")

miVariable *= A
console.log(miVariable,"mi variable multiplicada por A ( 7)")
miVariable /=A
miVariable -=A
miVariable %=A
miVariable **=A

// 3. imprime  5 comparaciones de verdaderas  con diferentes operadores de comparacion
console.log('imprime las 5 comparaciones verdaderas con operadores de comparacion')

console.log(5==5) 
console.log(6>5)
console.log(5<6)
console.log(6>=6)
console.log(6<=6)
console.log(5 == 5) //igual por valor es lo que comparo
console.log("5"=="5") //Igualdad por valor

console.log(5=== 5)
console.log(5!= 7) 
//Comparacion 
console.log(0==false)

// 4. Imprime 5 comparaciones falsas con diferentes Operadores de comparacion
console.log('imprime las 5 comparaciones falsas con operadores de comparacion')

console.log(7!= 7) 
console.log(5=== 7)
console.log(1==false)
console.log(6>7)
console.log(6<5)

//5. Utiliza el operador logico AND
console.log(' Utilizacion del Operador AND')
console.log(6> 5&& 6<8)



//6. utiliza el Operador logico OR 
console.log(6> 5 || 6<8)

//7. Combina ambos Operadores logicos 
console.log(6> 5 && 6> 5 || 6<8)



//8. Añade Alguna negacion.

console.log(!(6> 5 && 6> 5 || 6<8))
console.log(!false)

// 9. utiliza el operador temario

const  israining= true

israining ? console.log(" greizel esta aprendiendo"): console.log("  greizel no esta aprendiendo")

//10. Combina Operadores aritmeticos, de comparacion y logicos
console.log ("combinacion de  Operadores aritmeticos( + de suma), de comparacion( == igualdad ) y logicos(&& de and ) ")
let cuarenta= 40
let diez= 10
console.log(cuarenta+diez==50 && 50 == 50) 




