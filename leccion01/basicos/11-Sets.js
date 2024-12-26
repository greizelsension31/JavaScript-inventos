
//Set
// Declaracion

let mySet = new Set()
console.log(mySet)

// inicializacion

 mySet = new Set(["greizel", "sension", " es marravillosa", 27, true, "brainmourev@gmail.com"])
 console.log(mySet)

 // metodos comunes en set

 // Operacion add :  para anadir datos

 mySet.add("https://moure.dev")
 console.log(mySet)// Se ve que ahora lo que tenia el set ahora son 7 y no 6 elementos y se agrego con add el nuevo elemento

 // operacion delet: para eliminar datos, tiene una peculiaridad,debes decirle cual es el elemento que quieres eliminar.


 mySet.delete("https://moure.dev")// tengo que pasarle el mismo elemento para q lo elimine,y no indice como 0,1,2.
 console.log(mySet)

 console.log(mySet.delete("greizel"))// se utiliza para comprobar si se elimino ese elemento
 console.log(mySet.delete("https://moure.dev"))

 console.log(mySet)

 // tambien se puede usar con un IF

if(mySet.delete(4)){
    console.log(" se elimino")

}else{
    console.log(" no se elimino")

}

//operacion has : se utiliza para comprar si existe un elemento

console.log(mySet.has("greizel"))
console.log(mySet.has("sension"))

// size : magnitud del set 
console.log(mySet.size)


// convertir un set a Array

let myArray=  Array.from(mySet)
console.log(myArray)

// convertir un array en un set 
mySet= new Set(myArray)
console.log(mySet)

// principal diferencia entre array y set  : es que no admite Duplicados

mySet.add("brainmourev@gmail.com")
mySet.add("brainmourev@gmail.com")
mySet.add("brainmourev@gmail.com")
mySet.add("BrainMourev@gmail.com") // CAMBIE LA B Y M POR MAYUSCUSLAS  Y ahi si lo admite
console.log(mySet)



