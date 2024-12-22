
/* condicionales
sirve para decisiones ,
nos permite ejecutar diferentes bloques de codigo 
utilizando operadores de comparacion y logicos y temarios

condicionales if, else, if else, else
*/

// condicionales IF ( si)
let age = 27

if (age== 27){
    // bloque de codigo es todo lo que esta dento de la llave
    console.log(" la edad es 27")

}



// USO de condional else 
// en caso que no se cumple ejecutar otra es: else (si no / o si es distinto )
if (age== 27){
    // bloque de codigo es todo lo que esta dento de la llave
    console.log(" la edad es 27")

} else if (age < 18){  // else if ( si no, si)  ejemplo pero si es menor de edad ejecutar otro codigo
console.log( " es menor de edad ")

}
else{ console.log("la edad no es 27 ni es menor de edad ")
}


// Condicional - Operador termario
const message =age == 27 ? "la edad es 27": " la edad no es 27"
console.log(message) // los termarios se usan para lineas de codigos no tan complicados, que sean sencillos sin tanto bloques de codigo

// condicional switch, es util cuando tenemos muchas condiciones que  verificar , pero contra una unica variable

let day = 0
let dayname 

switch (day){

case 0:
    dayname='lunes'
    break
case 1:
    dayname='Martes'
    break
case 2:
    dayname='Miercoles'
case 3:
    dayname='Jueves'
    break
case 4: 
    dayname='Viernes'
    break
case 5:
    dayname='Sabado'
    break
case 6:
    dayname='Domingo'
    break

    default:
        dayname=' numero  de dia incorrecto'
} console.log(dayname)







