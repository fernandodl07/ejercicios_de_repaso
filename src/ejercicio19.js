/*
Calculadora básica

Tema: condiciones múltiples + operadores

let num1 = 12
let num2 = 3
let operacion = '+'
Usa if/else if para realizar:

Suma, resta, multiplicación o división según operacion. Muestra el resultado final
*/

let num1 = 12
let num2 = 3
let operacion = '+'

if (operacion == '+') {
    console.log(`La suma de ${num1} + ${num2} es ${num1 + num2}`)
}
else if (operacion == '-') {
    console.log(`La resta de ${num1} - ${num2} es ${num1 - num2}`)
}
else if (operacion == '*') {
    console.log(`La multiplicación de ${num1} * ${num2} es ${num1 * num2}`)
}
else if (operacion == '/') {
    console.log(`La división de ${num1} / ${num2} es ${num1 / num2}`)
}
else {
    console.log('Operación no válida')
}
