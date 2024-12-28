
// bucles o loops: 


// bucle FOR : sirve para ejcutarse segun se lanza y tiene un condicion que se repite y siempre que concide se ejecuta .


// ejemplo con For 
for (let i = 0; i < 5; i++ ){
    console.log(`hola${i}`)
}

///estructura con datos definimos un lista de numeros, y lo que quiero es recorrer este listado.

const numbers =[1,2,3,4,5]
for(let i=0 ; i <5;i++){
    console.log(`el elemento: ${numbers[i]}`)
}

// ejemplo peor con  de limite 7 de numbers: lo que hacemos el limitar al mismo tamano del listado,usando array
const numbers1 =[1,2,3,4,5,6,7,8]
for(let i=0 ; i <numbers1. length;i++){
    console.log(`el elemento: ${numbers1[i]}`)
}

// while : evalua antes de cada iterracion si es verdadero el bucle continua y si es false el bucle termina.
let i =0
while(i <5){
    console.log(`hola${i}`)
    i++
}
// bucle infinito
//while (true){

//}


//do While: se ejecuta un bloque de codigo al menos una vez
i =6
do {
 console.log(`hola${i}`)
 i++
}while(i <5)


    // for OF : sirve para recorer valores d ealgo que sea iterable ( estructura de datos o algun tipo de dato)
    // que es algo iterable


    myArray=[1,2,3,4]

    mySet = new Set(["greizel", "sension", "es marravillosa", 27, true, "brainmourev@gmail.com"])

    myMap = new Map([
        ["name ", "brais"],
        ["email", "braismoure@gmail.com"],
        ["age",27]
    ])
    myString = " hola, JavaScript"
// se recorrio cada uno de los elemntos del array
    for(let valor of myArray){
        console.log(valor)
    }
// se recorrio cada uno de los elemtnos del Set
    for(let valor of mySet){
        console.log(valor)
    }

    // se recorrio el map 

 for(let valor of myMap){
        console.log(valor)
    }
    // se ejecuta el string 
    for(let valor of myString){
        console.log(valor)
    }

    /* Buenas practicas.
    1. que siempe que estes haciendo bucle, revisar que no procoques un bucle infinito.
    2. el uso del break: lo que sirve es para parar el bucle.
    3. el uso del continue : ayuda  saltar interacion , le dice continua en la siguiente ejecucion lo anterior no me importa.

*/

//break and continue

for( let i = 0; i < 10;i++){
    if ( i ==5){
        continue
} else if (i==9){
    break

} console.log(`hola ${i}`)

}