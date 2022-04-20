console.log("//// inicio - menú principal //// \n");
console.log("1. ingresar \n");
console.log("2. registrarse \n");

///////////////////////////////// "
let emailUsuario;
let passwordUsuario;
let cupo = 200;
const precioEntradas = 900;
const serviceCharge = 50;
let entradasReservadas = 0;

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
	if (email !== emailUsuario || password !== passwordUsuario) {
		return false;
	} else {
		return true;
	};
}

function registrarse() {
	emailUsuario = prompt('Email: ');
	passwordUsuario = prompt('Contraseña: ');
	alert('el registro fue exitoso!');
	menuPrincipal();
}

function salir() {
	document.write('saliste.');
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
			reservarEntrada();
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

	function reservarEntrada() {
		let entradasAReservar = Number(prompt('Ingrese el número de entradas a reservar'));
		if (entradasAReservar <= cupo) {
			calcularPrecio(entradasAReservar);
			pagarEntradas();
			entradasReservadas += entradasAReservar;
			cupo -= entradasAReservar;
			console.log('cupos: ' + cupo);
			alert(`reservaste ${entradasAReservar} entradas.`);
			entradasAReservar = 0;
			menuMiembros();
		} else {
			alert('no quedan más entradas :(');
			menuMiembros();
		}
		function calcularPrecio() {
			let precio = 200
			let subtotal = precio * entradasAReservar;
			let total = subtotal + serviceCharge;
			alert(
				`${entradasAReservar} entradas a 200 c/u: ${subtotal}` + '\n' +
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
		console.log(`Tienes ${entradasReservadas} entradas reservadas`)
		for (let i = 0; i < entradasReservadas; i += 1) {
			document.write('<img style={width: 300px} src=https://static4.depositphotos.com/1012407/370/v/950/depositphotos_3707681-stock-illustration-yellow-ticket.jpg>')
		}
		alert(`tienes ${entradasReservadas} entradas reservadas`);
		// menuMiembros();
	}

	function verCupos() {
		console.log(`Quedan ${cupo} entradas`);
		alert(`Quedan ${cupo} entradas`);
		menuMiembros();
	}
}