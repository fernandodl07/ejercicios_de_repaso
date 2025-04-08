import readline from "readline/promises"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
/*
18. Validar usuario y contraseña

Tema: doble condición

let usuario = 'admin'
let contrasena = '1234'
Verifica si ambos valores son correctos.

Si lo son, imprime "Acceso permitido"; si no, "Datos incorrectos".
*/

let usuario = await rl.question("Ingrese el numero el usuario: ")
let contrasena = await rl.question("Ingrese el numero la contrasena : ")
rl.close();

if (usuario === 'admin' && contrasena === '1234') {
    console.log("Acceso permitido")
} else {
    console.log("Datos incorrectos")
}