const serviceCharge = 50;
let subtotal;

const Entrada = function (nombreEvento, precio, username, eventoId, fecha, horario, direccion, imagen) {
	this.nombreEvento = nombreEvento;
	this.precio = precio;
	this.username = username;
	this.eventoId = eventoId;
	this.fecha = fecha;
	this.horario = horario;
	this.direccion = direccion;
	this.imagen = imagen;
	let id = 1;
	this.id = id;
	this.getId = () => id;
	this.makeId = () => id = Math.floor(Math.random() * 1000000);
}

function calcularPrecio(cantidad, precio) {
	let multiplicacion = precio * cantidad;
	subtotal = multiplicacion;
	return subtotal;
}

function crearEntrada(nombreEvento, precio, username, eventoId, fecha, horario, direccion, imagen) {
	let nuevaEntrada = new Entrada(nombreEvento, precio, username, eventoId, fecha, horario, direccion, imagen);
	return nuevaEntrada;
}


// function verEntradas() {
// 	alert(`tienes ${usuario.entradas.length} entradas reservadas!`)
// 	for (let i = 0; i < usuario.entradas.length; i += 1) {
// 		console.log(`Entrada No. ${usuario.entradas[i].numero}`);
// 	}
// 	menuMiembros();
// }
// 
// function verCupos() {
// 	console.log(`Quedan ${cupo} entradas`);
// 	alert(`Quedan ${cupo} entradas`);
// 	menuMiembros();
// }
// 
// function buscarEntradas() {
// 	let numEntrada = prompt('Ingrese número de entrada a buscar');
// 	let entradaEncontrada = busqueda(entradasReservadas, numEntrada);
// 
// 	if (entradaEncontrada != undefined) {
// 		alert(`La entrada ${entradaEncontrada.numero} pertenece al usuario ${entradaEncontrada.username}`);
// 		menuMiembros();
// 	} else {
// 		alert('La entrada no ha sido reservada.');
// 	}
// 
// 	function busqueda(array, numEntrada) {
// 		return array.find(e => e.numero == parseInt(numEntrada)); // buscar un elemento en el array cuya propiedad numero coincida con el segundo argumento de la función.
// 	}
// }

export { crearEntrada, Entrada, calcularPrecio }
