/*
27. Juego del número secreto

Tema: do...while con condición

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
console.log(`El número secreto es: ${NUMERO_SECRETO}`)
Crea un juego que pide números hasta adivinar el número secreto.

Muestra: "¡Adivinaste!" cuando el intento sea correcto.

Haz que el valor de intento cambie dentro del bucle.
*/
import readline from "readline/promises"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
console.log(`El número secreto es: ${NUMERO_SECRETO}`)  

let intento

do {
   intento = parseInt(await rl.question("Adivina el número secreto (entre 1 y 100): "))
  if (intento === NUMERO_SECRETO) {
    console.log("¡Adivinaste!")
  } else if (intento < NUMERO_SECRETO) {
    console.log("El número secreto es mayor.")
  } else {
    console.log("El número secreto es menor.")
  }
}
while (intento !== NUMERO_SECRETO)
rl.close()