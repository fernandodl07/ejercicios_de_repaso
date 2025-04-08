/*
17. Mayor de tres números

Tema: if-else anidado

let a = 10,
    b = 5,
    c = 7
Muestra cuál es el número mayor entre los tres.
*/

let a = 10
let b = 5
let c = 2

if (a > b && a > c) {
    console.log(`El número mayor es ${a}`)
}
else if (b > a && b > c) {
    console.log(`El número mayor es ${b}`)
}
else if (c > a && c > b) {
    console.log(`El número mayor es ${c}`)
}