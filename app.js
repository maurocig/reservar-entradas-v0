
let conteoEntradas = 0;
console.log("//// inicio - menú principal //// \n");
console.log("1. ingresar \n");
console.log("2. registrarse \n");

///////////////////////////////// "
let emailUsuario;
let passwordUsuario;
let cupo = 200;
let entradas = [];

const usuarios = [];
let usuario = 0;

const precioEntradas = 900;
const serviceCharge = 50;
let entradasReservadas = [];

class Usuario {
	constructor(email, password) {
		this.password = password;
		this.email = email;
		this.entradas = [];
		// this.estaIngresado = false;
	}
	salir() {
		document.write('saliste.');
		// estaIngresado = false;
	}
}

class Entrada {
	constructor(numero, precio) {
		this.numero = numero;
		this.precio = precio;
	}
}

menuPrincipal();

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


function registrarse() {
	const emailUsuario = prompt('Ingrese email');
	const passwordUsuario = prompt('Ingrese contraseña');
	usuario = new Usuario(emailUsuario, passwordUsuario);
	usuarios.push(usuario);
	menuPrincipal();
	console.log(usuarios);
}


function ingresar() {
	let email = prompt('Email: ');
	let password = prompt('Contraseña: ');
	if (!validarUsuario(email, password)) {
		alert('alguno de los datos es incorrecto.');
		menuPrincipal();
	} else {
		alert('Ingresaste correctamente');
		menuMiembros();
	}
}

function validarUsuario(email, password) {
	if (email !== usuario.email || password !== usuario.password) {
		return false;
	} else {
		return true;
	};
}

function menuMiembros() {
	console.log("1. reservar entrada \n");
	console.log("2. ver mi entrada \n");
	console.log("3. ver cupos \n");
	console.log("4. menu principal");
	// console.log("4. validar entrada \n");

	const seleccion2 = Number(prompt('Ingrese una opción: | 1. reservar entrada | 2. ver mi entrada | 3. ver cupos | 4. Menú principal'));
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
		// case 4:
		// 	validarEntrada();
		// break;
		default:
			alert('ingrese 1 para ingresar, 2 para registrarse y 3 para salir');
			menuMiembros();
			break;
	}
}

function reservarEntradas() {
	// let conteoEntradas = entradasReservadas.length;
	let cantidadEntradas = prompt('Ingrese la cantidad de entradas que desea reservar.')

	if (cantidadEntradas <= cupo) {
		calcularPrecio(cantidadEntradas);
		pagarEntradas();
		for (let i = 0; i < cantidadEntradas; i += 1) {
			// entradasReservadas.push(new Entrada(conteoEntradas += 1, 200));
			usuario.entradas.push(new Entrada(conteoEntradas += 1, 200));
			console.log(conteoEntradas)
			cupo -= 1;
		}
	} else {
		alert('no quedan más entradas :(');
		menuMiembros();
	}

	alert(`reservaste ${cantidadEntradas} entradas.`);
	menuMiembros();

	function calcularPrecio() {
		let precio = 200
		let subtotal = precio * cantidadEntradas;
		let total = subtotal + serviceCharge;
		alert(
			`${cantidadEntradas} entradas a 200 c/u: ${subtotal}` + '\n' +
			`Service Charge: ${serviceCharge}` + '\n' +
			`Total: ${total}`
		)
		return (total);
	}
	function pagarEntradas(total) {
		console.log(total);
	}
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
