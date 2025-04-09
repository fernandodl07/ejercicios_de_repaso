/*
50. Buscar posición de un color

Tema: indexOf()

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo']
Encuentra y muestra la posición de "Azul" dentro del arreglo.
*/

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo']
const colorBuscado = 'Azul'
const posicion = colores.indexOf(colorBuscado)
console.log(`La posición de "${colorBuscado}" es: ${posicion}`)