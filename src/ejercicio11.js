/*
Puede conducir o no

Tema: operadores lógicos &&

let edad = 22
let tieneLicencia = true
Usa una condición para verificar si puede conducir
*/

let edad = 22
let tieneLicencia = true

if(edad >= 16 && tieneLicencia) {
    console.log('Puede conducir')
}else if(edad < 16 && tieneLicencia) {
    console.log('No puede conducir porque no tiene la edad suficiente')
}
else if(edad >= 16 && !tieneLicencia) {
    console.log('No puede conducir porque no tiene licencia')
}