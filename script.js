// 🗓 Meses del año
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

// ❄️ Estaciones del año

// const estacion = prompt('elija una estación del año: 1. verano; 2. otoño; 3. invierno o 4. primavera');
// switch(estacion){
//     case '1':
//         alert('el verano en el hemisferio sur va de 21 de diciembre al 21 de marzo y en el hemisferio norte del 21 de junio al 22 de septiembre.');
//         break;
//     case '2':
//         alert('el otoño en el hemisferio sur va de 21 de marzo al 21 de junio y en el hemisferio norte del 22 de septiembre al 21 de diciembre.');
//         break;
//     case '3':
//         alert('el invierno en el hemisferio sur va de 21 de junio al 22 de septiembre y en el hemisferio norte del 21 de diciembre al 21 de marzo.');
//         break;
//     case '4':
//         alert('la primavera en el hemisferio sur va de 22 de septiembre al 21 de diciembre y en del hemisferio norte del 21 de marzo al 21 de junio.'); 
//         break;
//     default:
//         alert('opción invalida');
//         break;
// }

// 🧮 Calculadora 1
// const op = prompt('cual a operación que usted desea realizar? 1. suma; 2. resta; 3. multiplicación; o 4. división?');
// const num1 = prompt('cual es el primero número para la operación?');
// const num2 = prompt('cual es el segundo número para la operación?');
// let resultado;
// switch (op){
//     case '1':
//         resultado = parseFloat(num1) + parseFloat(num2);
//         alert(`El resultados es ${resultado}.`);
//         break;
//     case '2':
//         resultado = parseFloat(num1) - parseFloat(num2);
//         alert(`El resultados es ${resultado}.`);
//         break;
//     case '3':
//         resultado = parseFloat(num1) * parseFloat(num2);
//         alert(`El resultados es ${resultado}.`);
//         break;
//     case '4':
//         resultado = parseFloat(num1) / parseFloat(num2);
//         alert(`El resultados es ${resultado}.`);
//         break;
//     default:
//         alert('operación invalida')
//         break;
// }

// 🧮 Calculadora 2
// const form = document.getElementById("calculadora");
// const calcular = (event) => {
//     event.preventDefault();

//     const num1 = parseInt(event.target.num1.value);
//     const num2 = parseInt(event.target.num2.value);
//     const op = event.target.operacion.value;

//     let respuesta;

//     switch (op) {
//       case "suma":
//         respuesta = num1 + num2;
//         break;

//       case "resta":
//         respuesta = num1 - num2;
//         break;

//       case "multiplicacion":
//         respuesta = num1 * num2;
//         break;

//       default:
//         respuesta = num1 / num2;
//     }

//     rta.innerText = respuesta;
//   };

//   form.addEventListener("submit", calcular);


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

// 💵 ATM
// ###CONTRASEÑA
const password = document.getElementById('password');
const enter = document.getElementById('enter');
const access = document.getElementById('access');
let pin = 'ada8va';

const validate = (event) => {
    event.preventDefault();

    if (password.value === pin) {
        enter.classList.remove('show');
        enter.classList.add('hidden');
        access.classList.remove('hidden');
        access.classList.add('show');
    } else {
        alert('contraseña invalida');
    }
}

enter.addEventListener('change', validate)

//no he podido hacer con el submit

// ###OPERACIONES
const form = document.getElementById('access');
let credit = Math.floor((Math.random() * (2000 - 0)) + 0);
let creditUpdate = document.getElementById('result');
creditUpdate.innerText = `${credit}`;

const calculate = (event) => {
    event.preventDefault();
    const qty = parseFloat(event.target.qty.value);
    const op = event.target.mySelect.value;
    switch (op) {
        case "withdraw":
            if (credit >= qty) {
                credit = credit - qty;
            } else {
                alert('saldo insuficiente para realizar la operación');
            }
            break;

        case "deposit":
            credit = credit + qty;
            break;

        case "transfer":
            const cbu = prompt('Cual es el CBU?')
            if (cbu === 'shouldbeanumber' && credit >= qty) {
                credit = credit - qty;
                alert('transferencia realizada')
            } else if (cbu !== 'shouldbeanumber') {
                alert('El CBU es incorrecto.')
            } else if (credit <= qty) {
                alert('saldo insuficiente para realizar la operación');
            }
            break;

        case "change":
            const confirm = prompt('Cual es la contraseña actual?');
            if (confirm === pin){
                let newPin = prompt('digite la nueva contraseña');
                pin = newPin;
            }
            else {
                alert('contraseña inválida');
            }
            window.location.reload();
            break;
        case "out":
            window.location.reload();
            break;
        default:
            window.location.reload();
            break;
    };
    creditUpdate.innerText = `${credit}`;
};

form.addEventListener('submit', calculate)