// Pide al usuario mail y contraseña, le permite registrarse.
// Permite reservar entradas, calcular precio, asignarle un número a cada una (mientras haya cupo).
// Cada entrada identificada por su número está asociada al usuario.

console.log("//// inicio - menú principal //// \n");
console.log("1. ingresar \n");
console.log("2. registrarse \n");

///////////////////////////////// "
let emailUsuario;
let passwordUsuario;
let cupo = 200;
let conteoEntradas = 0;
let entradas = [];

const usuarios = [];
let usuario = 0;

const precioEntradas = 900;
const serviceCharge = 50;
let entradasReservadas = [];

class Usuario {
	constructor(email, password, username) {
		this.email = email;
		this.password = password;
		this.username = username
		this.entradas = [];
		// this.estaIngresado = false;
	}
	salir() {
		document.write('saliste.');
		// estaIngresado = false;
	}
}

class Entrada {
	constructor(numero, precio, username) {
		this.numero = numero;
		this.precio = precio;
		this.username = username;
	}
}

menuPrincipal();

// menuMiembros();

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
	const nombreUsuario = prompt('Ingrese nombre de usuario');
	usuario = new Usuario(emailUsuario, passwordUsuario, nombreUsuario);
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

function salir() {
	document.write('saliste');
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

function cerrarSesion() {
	usuario = 0;
	menuPrincipal();
}

function reservarEntradas() {
	// let conteoEntradas = entradasReservadas.length;
	let cantidadEntradas = prompt('Ingrese la cantidad de entradas que desea reservar.')

	if (cantidadEntradas <= cupo) {
		calcularPrecio(cantidadEntradas);
		pagarEntradas();
		for (let i = 0; i < cantidadEntradas; i += 1) {
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
	} else {
		alert(`Actualmente quedan solo ${cupo} entradas.`)
		reservarEntradas();
	}
	alert(`reservaste ${cantidadEntradas} entradas.`);
	console.log(entradas)
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

// entradas.push(new Entrada(5, 900, 'Gorje'));
// entradas.push(new Entrada(9, 800, 'Pepe'));
// menuPrincipal()


