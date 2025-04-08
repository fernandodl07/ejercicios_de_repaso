import readline from "readline/promises"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
/*
Menú interactivo (simulado)

Tema: do...while

Simula un menú que se muestra al menos una vez.

Si opcion es "A", muestra "Bienvenid@".

Si opcion es "B", permita la entrada de un nombre y muestra "Bienvenid@ ${nombreIngresado}".

Repite mientras opcion no sea "3".


*/

let opcion = await rl.question("ingrese la opcion: ")
 

switch (opcion.toUpperCase()) {
    case 'A':
        console.log("Bienvenid@");
      break;
    case 'B':
        let nombreIngresado = await rl.question("Ingrese su nombre: ")   
        console.log(`Bienvenid@ ${nombreIngresado}`);
      break;
    case '3':
        console.log("Saliendo del menú. ¡Hasta pronto!");
      break;
    default:
        console.log("Opción no válida. Intenta nuevamente.");
  } while (opcion !== '3');
