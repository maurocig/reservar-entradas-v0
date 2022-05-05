//// USUARIOS ////
let nuevoEmail = document.querySelector('#emailReg');
let nuevoUsername = document.querySelector('#nuevoUsername');
let nuevoPassword = document.querySelector('#nuevoPassword');
// let usuario;
// const usuarios = [];


class Usuario {
	constructor(email, password, username) {
		this.email = email;
		this.password = password;
		this.username = username
		this.entradas = [];
		this.estaIngresado = false;
		// this.estaIngresado = false;
	}
	salir() {
		document.write('saliste.');
		// estaIngresado = false;
	}
}


function registrarse() {
	usuario = new Usuario(nuevoEmail, nuevoPassword, nuevoUsername);
	usuarios.push(usuario);
	console.log(usuario);
	console.log(usuarios);
	alert('Creaste un nuevo usuario!')
}

function ingresar() {
	let email = prompt('Email: ');
	let password = prompt('Contraseña: ');
	if (!validarUsuario(email, password)) {
		alert('alguno de los datos es incorrecto.');
	} else {
		alert('Ingresaste correctamente');
		usuario.estaIngresado = true;
	}
}

function validarUsuario(email, password) {
	if (email !== usuario.email || password !== usuario.password) {
		return false;
	} else {
		return true;
	};
}

function cerrarSesion() {
	usuario = 0;
	menuPrincipal();
}


//// ENTRADAS ////
const precioEntradas = 900;
const serviceCharge = 50;
let cupo = 200;
let entradasReservadas = [];
let conteoEntradas = 0;
let entradas = [];
let cantidad;
let subtotal;

let usuario = new Usuario(nuevoEmail, nuevoPassword, nuevoUsername);

const formAgregar = document.querySelector('#formAgregar');
let inputCantidad = document.querySelector('#cantidad');
const botonAgregar = document.querySelector('#botonAgregar');
const botonReservar = document.querySelector('#botonReservar');

class Entrada {
	constructor(numero, precio, username) {
		this.numero = numero;
		this.precio = precio;
		this.username = username;
	}
}

formAgregar.addEventListener('submit', (e) => {
	e.preventDefault();
	cantidad = inputCantidad.value;
	agregarEntradas(cantidad);
})



function agregarEntradas(cantidad) {
	conteoEntradas = entradasReservadas.length;

	if (cantidad < cupo) {
		calcularPrecio(cantidad);
		pagarEntradas(subtotal);
		for (let i = 0; i < cantidad; i += 1) {
			// entradasReservadas.push(new Entrada(conteoEntradas += 1, 200));
			let nuevaEntrada = new Entrada(conteoEntradas += 1, 200, usuario.username);
			usuario.entradas.push(nuevaEntrada);
			entradasReservadas.push(nuevaEntrada);
			console.log(conteoEntradas);
			console.log(entradasReservadas);
			cupo -= 1;
		}
	} else if (cupo == 0) {
		alert('no quedan más entradas :(');
		menuMiembros();
	} else if (cantidad > cupo) {
		alert(`Actualmente quedan solo ${cupo} entradas.`)
		// reservarEntradas();
	}
	alert(`agregaste ${cantidad} entradas.`);
	console.log(entradas)

	function calcularPrecio(cantidad) {
		let precio = 200;
		let multiplicacion = precio * cantidad;
		subtotal = multiplicacion + serviceCharge;
		let resumen = document.createElement('p')
		document.body.appendChild(resumen);
		resumen.innerText =
			`${cantidad} entradas a 200 c/u: ${multiplicacion}` + '\n' +
			`Service Charge: ${serviceCharge}` + '\n' +
			`subtotal: ${subtotal}`
		return subtotal;
	}
}

function pagarEntradas(total) {
	console.log(total);
}

function verEntradas() {
	alert(`tienes ${usuario.entradas.length} entradas reservadas!`)
	for (let i = 0; i < usuario.entradas.length; i += 1) {
		console.log(`Entrada No. ${usuario.entradas[i].numero}`);
	}
	menuMiembros();
}

function verCupos() {
	console.log(`Quedan ${cupo} entradas`);
	alert(`Quedan ${cupo} entradas`);
	menuMiembros();
}

function buscarEntradas() {
	let numEntrada = prompt('Ingrese número de entrada a buscar');
	let entradaEncontrada = busqueda(entradasReservadas, numEntrada);

	if (entradaEncontrada != undefined) {
		alert(`La entrada ${entradaEncontrada.numero} pertenece al usuario ${entradaEncontrada.username}`);
		menuMiembros();
	} else {
		alert('La entrada no ha sido reservada.');
	}

	function busqueda(array, numEntrada) {
		return array.find(e => e.numero == parseInt(numEntrada)); // buscar un elemento en el array cuya propiedad numero coincida con el segundo argumento de la función.
	}
}


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


