/*
41. Generar contraseña aleatoria

Tema: lógica con bucle dentro de función

Crea una función generarContraseña(longitud). Debe retornar una contraseña aleatoria con letras y números.

Ejemplo: "a7d3g8" si la longitud es 6.

(No necesitas usar caracteres especiales).
*/
import readline from "readline/promises"

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
let longitud = parseInt(await rl.question("Ingrese la longitud de la contraseña: "))
function generarContraseña(longitud) {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&/()=+?~–,.";
    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }
    return contraseña;
}
console.log(`La contraseña generada es: ${generarContraseña(longitud)}`)
rl.close()