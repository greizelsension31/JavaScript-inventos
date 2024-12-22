
// strings ejercicios

// 1. concatena dos cadenas de textos
let p1 = "estoy"
let p2 = " Aprendiendo"
let cadena= "yo "+p1+p2+" JavaScript"

console.log(cadena)

// 2. muestra la longitud de una cadena de texto
console.log(cadena.length)

// 3. Muestre el primer y ultimo caracter de un string

console.log(cadena[0])
console.log(cadena[-1])

//4. convierta a mayuscula y minuscula un string

console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())

// 5. crea una cadena de texto en varias lineas

let presentacion =`Hola
soy greizel y estoy aprendiendo JavaScript. 
Estoy muy emocionada con estos primeros pasos

`
console.log(presentacion)


// 6. interpola el valor de una variable en un string.
console.log(`puedes presentarte greizel ? ${presentacion}`)

// 7. reemplaza todos los espacios en blancos  de un string por guiones.

console.log(presentacion.replaceAll(" ","-")) // con replaceALL cambio todos los espacios en blacos por con guiones (-)

// 8. comprueba si una cadena de texto contiene una palabra concreta

console.log(presentacion.indexOf("greizel"))

// 9. compruebe si dos strings son iguales

console.log(cadena ==presentacion)
console.log(cadena == cadena)

// 10. compruebe si dos strings tienen la misma logitud

console.log(cadena.length== presentacion.length)
console.log(cadena.length== cadena.length)