
/* Maps : es como una estructura de datos
 que sirve para almacenar en ellas un tipo de datos
  no uno salo si no  un conjunto de datos.

  que es un map? un diccionario en otros lenguajes,
 vendria siendo una coleccion de elementos que cada elemento es unico
  y cada elementos esta definido como una clave o un valor.
  y una clave que nos ayuda a buscar ese elemento y un valor que se le da.

*/


// declaracion  
let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name ", "brais"],
    ["email", "braismoure@gmail.com"],
    ["age",27]
])
console.log(myMap)


//Metodos y propiedas 

// operacion SET: cambiay no puede a er repetidos en clave 

myMap.set("alias ", "Mouredev")
myMap.set("name", "brais Moure")

console.log(myMap)

// get : buscar algo 

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has : operacion que nos permite comprobar si una clave existe o no.
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete : eliminar un elemento

myMap.delete("email")
console.log(myMap)


// keys 

console.log(myMap.keys())
console.log(myMap.values())

// nos trae todos los lementos del mapa clave y valores. no por partes como arriba con values y keys.
console.log(myMap.entries())

// operacion size : cual es el tamano de este mapa

console.log(myMap.size)

// clear

myMap.clear()
console.log(myMap)





