/*
38. Verificar si un número es par

Tema: función condicional

Crea una función esPar(numero). La función debe retornar true si el número es par, o false si es impar.

Prueba la función con el número 7.
*/
import readline from "readline/promises"

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

let numero = parseInt(await rl.question("Ingrese un numero: "))
function esPar(numero) {
    return numero % 2 === 0;
}
if (esPar(numero)) {
    console.log(`El número ${numero} es par.`)
}
else {
    console.log(`El número ${numero} es impar.`)
}
rl.close()