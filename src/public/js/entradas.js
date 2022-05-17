import { Usuario } from './usuarios.js';

const precioEntradas = 900;
const serviceCharge = 50;
let cupo = 200;
// let entradasReservadas = [];
let entradasAgregadas = [];
let conteoEntradas = entradasAgregadas.length;
let entradas = [];
let subtotal;

let usuario = new Usuario('juan@gmail.com', '1', 'juan01');


class Entrada {
	constructor(numero, precio, username, nombre) {
		this.numero = numero;
		this.precio = precio;
		this.username = username;
		this.nombre = nombre;
	}
}


function agregarEntradas(cantidad) {

	calcularPrecio(cantidad);
	pagarEntradas(subtotal);
	for (let i = 0; i < cantidad; i += 1) {
		// entradasReservadas.push(new Entrada(conteoEntradas += 1, 200));
		let nuevaEntrada = new Entrada(conteoEntradas += 1, 200, usuario.username);
		entradasAgregadas.push(nuevaEntrada);

	}
	// console.log(entradasAgregadas)

	function calcularPrecio(cantidad) {
		let precio = 200;
		let multiplicacion = precio * cantidad;
		subtotal = multiplicacion + serviceCharge;
		let resumen = document.createElement('p')
		document.body.appendChild(resumen);
		resumen.innerText =
			`${cantidad} entradas a 200 c/u: .......... ${multiplicacion}` + '\n' +
			`Service Charge: .................. ${serviceCharge}` + '\n' +
			`Subtotal: ............................. ${subtotal}`
		return subtotal;
	}

	// function reservarEntradas() {
	// 	for (let entradaAgregada of entradasAgregadas) {
	// 		usuario.entradas.push(entradaAgregada);
	// 		entradasReservadas.push(entradaAgregada);
	// 		cupo -= 1;
	// 	}
	// 	alert(`Reservaste ${usuario.entradas.length} entradas.`);
	// 	console.log(entradasReservadas);
	// }

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
}
export { agregarEntradas, Entrada, entradasAgregadas }