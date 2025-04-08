/* 
37. Área de un triángulo

Tema: función con retorno

Crea una función calcularAreaTriangulo(base, altura). Debe retornar el área usando la fórmula (base * altura) / 2.

Llama a la función con los valores ingresados por el usuario e imprime el resultado.
*/
import readline from "readline/promises"

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
let base = parseFloat(await rl.question("Ingrese la base del triángulo: "))
let altura = parseFloat(await rl.question("Ingrese la altura del triángulo: "))

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(`El área del triángulo es: ${calcularAreaTriangulo(base, altura)}`)
rl.close()