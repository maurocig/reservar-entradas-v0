//// ENTRADAS ////
import { agregarEntradas, reservarEntradas } from './entradas.js';
import { Usuario } from './usuarios.js';

const formAgregar = document.querySelector('#formAgregar');
let inputCantidad = document.querySelector('#cantidad');
// const botonAgregar = document.querySelector('#botonAgregar');
const botonReservar = document.querySelector('#botonReservar');

formAgregar.addEventListener('submit', (e) => {
	e.preventDefault();
	let cantidad = inputCantidad.value;
	agregarEntradas(cantidad);
})

botonReservar.addEventListener('click', (e) => {
	e.preventDefault();
	reservarEntradas();
})


function menuPrincipal() {
	const selección = Number(prompt('Ingrese una opción: | 1. Ingresar | 2. registrarse | 3. salir |'));
	switch (selección) {
		case 1:
			ingresar();
			break;
		case 2:
			registrarse();
			break;
		case 3:
			salir();
			break;
		default:
			alert('ingrese 1 para ingresar, 2 para registrarse y 3 para salir');
			menuPrincipal();
			break;
	}
}

function menuMiembros() {
	const seleccion2 = Number(prompt('Ingrese una opción: | 1. reservar entrada | 2. ver mi entrada | 3. ver cupos | 4. Menú principal | 5. Buscar Entrada | 6. Cerrar Sesión'));
	switch (seleccion2) {
		case 1:
			reservarEntradas();
			break;
		case 2:
			verEntradas();
			break;
		case 3:
			verCupos();
			break;
		case 4:
			menuPrincipal();
			break;
		case 5:
			buscarEntradas();
			break;
		case 6:
			cerrarSesion();
			break;
		default:
			alert('ingrese 1 para ingresar, 2 para registrarse y 3 para salir');
			menuMiembros();
			break;
	}
}


function salir() {
	document.write('saliste');
}

// entradas.push(new Entrada(5, 900, 'Gorje'));
// entradas.push(new Entrada(9, 800, 'Pepe'));


