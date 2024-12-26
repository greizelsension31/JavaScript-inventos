
// Ejercicio de condicionales

//imprime  por consola tu nombre si una variable toma su valor.
let nombre="Greizel"
if (nombre== "Greizel"){
    console.log(" mi nombre es greizel")
}

// 2. imprime en consola un mensaje si el usuario y contrasena concide  con unos establecidos.
let contrasena="soy_marravillosa"
let usuario="Greizel"
if (usuario=="Greizel"&& contrasena=="soy_marravillosa"){
    console.log(" Acceso correcto")
} else{
    console.log(" tu usuario o contrasena son incorrectos")
}


// 3. verifica si un numero es positivo, negativo, o cero e imprime un mensaje
let numero= -1

if (numero > 0){
    console.log(" numero es positivo")

}else if (numero< 0){
    console.log("tu numero es negativo")
    
} else 
console.log(" tu numero es 0")

// 4. verifica si una personsa puede votar o no ( mayor o  igual a 18 ) e indica cuantos anos  le faltan
let edad="10"
let edad_p_votar= 18
let falta = edad_p_votar-edad
if (edad>=18){
    console.log( " puedes votar")
} else 

console.log(`No puedes votar
Aun eres menor de edad.
Te falta esta cantidad para votar ${falta}`)


// 5. usa el Operador ternario para asignar el valor " adulto" o " menor" a una variable dependiendo de la edad
let age =18

let menssage =age >= 18 ? " eres adulto": " eres menor"
console.log(menssage)

// 6. muestra en que estacion del ano nos encontramos dependiendo del valor de una variable" mes"
let mes = 12

if ( mes>=3&& mes<=5 ){
    console.log(" Primavera")
}else if (mes>=6 && mes <=8){
    console.log(" verano")
}else if(mes>=9&& mes<=11){
    console.log("otoño") 
}else if (mes== 12 || mes==1 || mes== 2){
    console.log(" Invierno")
} else {
    console.log(" no existe la estacion")
}
//7. Muestre el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes==1 || mes ==3 || mes==5 || mes ==7 ||mes == 8 ||mes ==10 || mes ==12){
    console.log( " tiene 31 dias ")
} else if ( mes == 4|| mes ==6 || mes==9|| mes == 11){
    console.log(" este mes tiene 30 dias")
}else if (mes== 2){
    console.log(" este mes tiene de 28 a 29 dias por lo general")
}else {
    console.log( " este mes no existe, vuelve a intentarlo")
}





// Switch 




//8. Usa un Switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma="aleman";
let idiomaname

switch(idioma){
    case "ingles":
        idiomaname=" hellow greizel"
        break
    case "espanol": 
         idiomaname="hola greizel"
         break
    case "brazileno":
        idiomaname=" olá greizel"
        break
    case "italiano": 
         idiomaname=" Cia greizel"
         break
    case "japones":
        idiomaname="Kon'nichiwa greizel"
        break
    case "frances": 
         idiomaname="Bonjour  greizel"
         break
    case "aleman":
        idiomaname="Hallo greizel"
        break

    default:
        console.log("Idioma no reconocido. ¡Hola!");
        break;
}  console.log(idiomaname)


// 9. usa un switch para hacer de nuevo el ejercicio 6.
let mess=12
let estacion

switch(mess){
    case 1:
    case 2:
    case 12:   
        estacion="Invierno"
         break
     case 3:
     case 4:
     case 5:   
        estacion="Primavera"
         break    
    case 6:
    case 7:
    case 8:
        estacion="Verano"
        break
    case 9:
    case 10:
    case 11: 
        estacion="otoño"
        break

    default:
        console.log("Esta estacion no existe");
        break;
}  console.log(estacion)


// 10. usa un switch para hacer de nuevo el ejerciccio 7.
let daymess

switch(mess){
    case 1:
    case 3:
    case 12:
    case 10: 
    case 5: 
    case 7:
    case 8:
        daymess=" este mes tiene 31 dias"
         break
    case 11:
    case 4:
    case 6:  
    case 9: 
        daymess=" este mes tiene 30 dias"
         break    
    case 2:
        daymess="este mes tiene de 28 a 29 dias"
        break
    default:
        console.log("Este mes no existe");
        break;
}  console.log(daymess)