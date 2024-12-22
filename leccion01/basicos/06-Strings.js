//strings

// concatenacion de strings( cadena)
let  Myname =" greizel mayleny"
let greeting = "hola, " + Myname + "!"
console.log(greeting)
console.log(typeof greeting) // console imprime tipo de dato , en este caso es strings

// longitud de cadena

console.log(greeting.length)


// acceso a caracteres
console.log(greeting[0]) // imprime lo que esta en la posicion 0 de la cadena de texto, en este caso es la " H"
console.log(greeting[22]) // imprime lo que esta en la posicion 5 de la cadena, en este caso es el simbolo "!"

// metodos comunes

console.log(greeting.toUpperCase()) // transforma una todo lo de la cadena de texto a mayusculas
console.log(greeting.toLowerCase()) // convierte toda la cadena de texto en minusculas
console.log(greeting.indexOf("greizel")) // imprime el indice en donde encontro la palabra greizel
console.log(greeting.indexOf("mayleny"))
console.log(greeting.indexOf("hola"))
console.log(greeting.slice(0,10))  // sirve para retornar un pedazo de la cadena, en este caso se queda con 10 elementos

console.log(greeting.replace("greizel","sension"))// remplaza la palabra greizel  por sension

// templates literals ( son platillas literales) sirve para interporar variables, o para crear strings de varias lineas.

let message =`hola, este es mi
curso de JavaScript` // con estas comillas puedes hacer un santo de linea en los textos
console.log(message)

let email = "greisens@gmail.com"
console.log( `hola,${Myname} ! tu email es :${email}`) //interpolaccion de variable con signo de dolar $ y {}