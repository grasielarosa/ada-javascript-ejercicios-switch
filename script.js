// Meses del año
// const mes = prompt('Elija un número entre el 1 y el 12')
// switch(mes){
//     case '1':
//         alert(`el mes de número 1 es enero`);
//         break;
//     case '2':
//         alert(`el mes de número 2 es febrero`);
//         break;

//     case '3':
//         alert(`el mes de número 3 es marzo`);
//         break;
//     case '4':
//         alert(`el mes de número 4 es abril`);
//         break;
//     case '5':
//         alert(`el mes de número 5 es mayo`);
//         break;
//     case '6':
//         alert(`el mes de número 6 es junio`);
//         break;
//     case '7':
//         alert(`el mes de número 7 es julio`);
//         break;
//     case '8':
//         alert(`el mes de número 8 es agosto`);
//         break;
//     case '9':
//         alert(`el mes de número 9 es septiembre`);
//         break;
//     case '10':
//         alert(`el mes de número 10 es octubre`);
//         break;
//     case '11':
//         alert(`el mes de número 11 es noviembre`);
//         break;
//     default:
//         alert(`el mes de número 12 es diciembre`);
//         break;
//     }



// 🐛 Tamagochi

// const tamagochi = 'Bucca';
// let salud = Math.floor((Math.random() * (11-0))+0);
// let felicidad = Math.floor((Math.random() * (11-0))+0);
// let limpieza = Math.floor((Math.random() * (11-0))+0);
// let energia = Math.floor((Math.random() * (11-0))+0);

// alert(`Hola, soy ${tamagochi}. Nivel de salud: ${salud}, felicidad: ${felicidad}; limpieza: ${limpieza} y energía: ${energia}`)

// const accion = prompt(`Que quieres hacer? 1. Alimentar; 2. Jugar; 3. Dormir; 4. Vacunar; 5. Bañar; 6. Retar; 7. Acariciar`);

// switch(accion){
//     case '1': 
//         felicidad= felicidad+2; 
//         energia= energia+3;
//     break;
//     case '2':
//         felicidad +=2;
//         energia +=2;
//         limpieza -=1;
//     break;
//     case '3':
//         energia +=5;
//         salud +=2;
//         limpieza -=2;
//     break;
//     case '4':
//         salud +=5;
//         felicidad -=6;
//     break;
//     case '5':
//         salud +=3;
//     break;
//     case '6':
//         felicidad -=3;
//     break;

//     default:
//         felicidad +4;
// }

// alert(`Nivel de salud: ${salud}, felicidad: ${felicidad}; limpieza: ${limpieza} y energía: ${energia}`)

//📺 Televisor
// const prenderTele = confirm('Desea prender la tele?');
// let canal = 9;
// let volumen = 10;
// if(prenderTele){
//     alert(`canal:${canal} volumen:${volumen}`);
//     const menu = prompt('Ingrese una opcion');
//     switch (menu) {
//         case 'cambiar':
//             canal = prompt('ingrese un canal de 0 al 99')
//             break;
//         case 'siguiente':
//             canal++
//             break;
//         case 'anterior':
//             canal--
//             break;
//         case 'subir':
//             volumen += 5
//             break;
//         case 'bajar':
//             volumen -= 5
//             break;
//         case 'mutear':
//             volumen = 0
//             break;
//         default:
//             alert('opcion invalida')
//     }
//     alert(`canal:${canal} volumen:${volumen}`);
// }else{
//     alert('Chau');
// }