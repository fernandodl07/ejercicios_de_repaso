/*
26. Suma hasta 100

Tema: acumulador en while

const numeros = [10, 15, 20, 25, 30, 5]
Usa un ciclo while para sumar los elementos hasta que la suma llegue o supere 100.

Imprime la suma y cuántos números usaste.

*/

const numeros = [10, 15, 20, 25, 30, 5]

let suma = 0
let contador = 0

while (suma < 100 && contador < numeros.length) {
  suma += numeros[contador]
  contador++
}

console.log(`Suma total: ${suma}`)
console.log(`Números usados: ${contador}`)
