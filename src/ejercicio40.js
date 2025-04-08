/*
40. Validar correo electrónico

Tema: lógica dentro de función

Crea una función validarCorreo(correo). Debe verificar si el string contiene "@" y "."

Si es así, muestra "Correo válido", si no, "Correo inválido".

Solicita un correo al usuario.
*/
import readline from "readline/promises"

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
let correo = await rl.question("Ingrese su correo: ")
function validarCorreo(correo) {
    if (correo.includes("@") && correo.includes(".")) {
        console.log("El correo es valido");
    } else {
        console.log("El correo no invalido");
    }
}
validarCorreo(correo)
rl.close()