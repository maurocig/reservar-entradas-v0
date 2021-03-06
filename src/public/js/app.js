// Import
import { Entrada, crearEntrada, calcularPrecio } from './entradas.js';
import { Evento } from './eventos.js';
import { Usuario } from './usuarios.js';
let entradasGuardadas;
let entradas = [];
let total;

document.addEventListener("DOMContentLoaded", () => {
	entradasGuardadas = JSON.parse(localStorage.getItem('Entradas Guardadas')) || [];
	total = JSON.parse(localStorage.getItem('Total')) || 0;
	entradas = entradasGuardadas;
	/* if (entradas.length > 0) { */
	/* 	conteo.innerText = `Carrito: ${entradas.length} entradas .... $${total}`; */
	/* } else { */
	/* 	conteo.innerText = 'Agregá tus entradas para verlas en el carrito.' */
	/* } */
})

// Variables
let entradasReservadas = [];
// let entradas = misEntradas || [];
const eventos = [];
const username = 'Juan01';
// let total = localStorage.getItem('Total') || 0;

let eventosGrid = document.querySelector('#eventos-grid');
let conteo = document.querySelector('#conteo');

let usuario = new Usuario('juan@gmail.com', 'juancito', 'juan01')

let numeroCarrito = document.querySelector('#numero-carrito');

// import data from './data.json';

fetch('/data.json')
	.then((res) => (res.json()))
	.then((data) => {
		data.forEach((evento) => {
			let nuevoEvento = new Evento(evento.artista, evento.imagen, evento.lugar, evento.direccion, evento.fecha, evento.horario, evento.precio);
			eventos.push(nuevoEvento);
		})
	})
	.then((data) => {
		for (let evento of eventos) {
			evento.makeId();
			// console.log(evento.getId());

			let index = eventos.indexOf(evento) + 1;
			let divEvento = document.createElement('div');
			divEvento.setAttribute('id', `evento-${index}`);
			divEvento.setAttribute('class', 'div-evento');

			// Agregar un form para cada evento
			let form = document.createElement('form');
			form.setAttribute('id', `form-${index}`);
			form.classList.add('form-group');
			form.classList.add('form-inline');
			form.innerHTML =
				`
				<label for="cantidad" class="label-cantidad">Cantidad: </label>
					<select class="form-control select-cantidad" name="input-cantidad-${index} d-inline" id="input-cantidad-${index}">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
					</select>
				<button class="btn btn-primary btn-agregar" type="submit">Agregar</button>
				`
			divEvento.appendChild(form);


			// Agregar una imagen a cada evento
			let img = document.createElement('img');
			img.setAttribute('src', `public/img/flyers/${evento.imagen}.jpg`);
			divEvento.appendChild(img);
			eventosGrid.appendChild(divEvento);


			//// EVENTOS ////
			form.addEventListener('submit', (e) => {
				e.preventDefault();
				let input = document.querySelector(`#input-cantidad-${index}`);
				let cantidad = input.value;
				let subtotal = calcularPrecio(cantidad, evento.precio);
				for (let i = 0; i < cantidad; i += 1) {
					console.log(evento.fecha);
					let nuevaEntrada = crearEntrada(evento.nombre, evento.precio, usuario.username, evento.getId(), evento.fecha, evento.horario, evento.direccion, evento.imagen);
					nuevaEntrada.id = nuevaEntrada.makeId();
					entradas.push(nuevaEntrada);
					total += evento.precio;
					numeroCarrito.innerHTML = entradas.length;
				}

				localStorage.setItem('Entradas Guardadas', JSON.stringify(entradas));
				localStorage.setItem('Total', JSON.stringify(total));
				// console.log(entradas);

				if (entradas.length > 0) {
					conteo.innerText = `Carrito: ${entradas.length} entradas .... $${total}`;
				} else {
					conteo.innerText = 'Agregá tus entradas para verlas en el carrito.'
				}


			});
		}
	})

const carrito = document.querySelector('#carrito');
carrito.addEventListener('click', () => {
	btnReservar.setAttribute('style', 'display:inline');
	btnReset.setAttribute('style', 'display:inline');
	conteo.setAttribute('style', 'display:inline');

})






let btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener('click', () => {
	console.log('limpiar apretado');
	limpiar();
});

function limpiar() {
	total = 0;
	entradas = [];
	localStorage.removeItem('Entradas Guardadas');
	localStorage.removeItem('Total');
	conteo.innerText = 'Agregá tus entradas para verlas en el carrito.'
	numeroCarrito.innerHTML = entradas.length;
}

let btnReservar = document.querySelector('#btn-reservar');
btnReservar.addEventListener('click', () => {
	reservar();
	console.log('reservado');
})

function reservar() {
	entradasReservadas = entradas;
	limpiar();
	localStorage.setItem('Entradas Reservadas', JSON.stringify(entradasReservadas));
	usuario.entradas.push(...entradasReservadas);

	console.log(entradasReservadas);
	Swal.fire(
		'Tus entradas fueron reservadas.',
		`Reservaste ${entradasReservadas.length} entradas.`,
		'success'
	);
}

let reservadas = document.querySelector('#reservadas');

export { entradasReservadas }