/*
9. Comparación entre dos números

Tema: operadores de comparación

let numeroA = 15
let numeroB = 20
Muestra si numeroA es mayor, menor o igual que numeroB.
*/

let numeroA = 15
let numeroB = 20
let resultado
if (numeroA > numeroB) {
    resultado = 'mayor'
}else if (numeroA < numeroB) {
    resultado = 'menor'
}else {
    resultado = 'igual'
}
console.log(`El número ${numeroA} es ${resultado} que el número ${numeroB}`)