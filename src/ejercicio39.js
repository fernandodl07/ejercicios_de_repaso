/*
39. Suma de arreglo

Tema: función con arreglo como parámetro

Crea una función sumarArreglo(arreglo). Debe retornar la suma total de los números ingresados por el usuario según un menú interactivo que permita ingresar un número y luego preguntar si desea ingresar más números hasta que ya no desee ingresar más números y que muestre la suma.

Utiliza push para ingresar cada número dado por el usuario
*/
import readline from "readline/promises"

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
let arreglo = []
let continuar = true

function sumarArreglo(arreglo) {    
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }
    return suma
}
do{
    let numero = parseFloat(await rl.question("Ingrese un número: "))
    arreglo.push(numero)
    let respuesta = await rl.question("¿Desea ingresar otro número? (si/no): ")
    if (respuesta.toLowerCase() !== "si") {
        continuar = false
    }
}   while (continuar)
console.log(`La suma total de los números ingresados es: ${sumarArreglo(arreglo)}`)
rl.close()