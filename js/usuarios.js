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

export { Usuario };