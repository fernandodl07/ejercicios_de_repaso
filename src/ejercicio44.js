/*
44. Aplicar IVA a productos

Tema: map()

const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]
Crea un nuevo arreglo con los precios incluyendo 12% de IVA.

Muestra el nuevo arreglo con los precios modificados.

*/
const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]
const productosConIVA = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precioOriginal: producto.precio,
        precioConIVA: +(producto.precio * 1.12).toFixed(2)
    };
});

console.log(productosConIVA);
