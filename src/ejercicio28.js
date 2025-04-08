/*
28. Validación de contraseña

Tema: verificación en do...while

const CONTRASENA_CORRECTA = 'claveSegura'
Repite el ingreso de contraseña hasta que coincida con la correcta.

Muestra "Contraseña incorrecta" cada vez que falle y "Acceso permitido" al final.
*/

import readline from "readline/promises"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const CONTRASENA_CORRECTA = 'claveSegura'
let contrasenaIngresada 

do {
    contrasenaIngresada = await rl.question("Ingrese la contraseña: ")
    if (contrasenaIngresada !== CONTRASENA_CORRECTA) {
        console.log("Contraseña incorrecta")
    }
}	while (contrasenaIngresada !== CONTRASENA_CORRECTA)
console.log("Acceso permitido")
rl.close()