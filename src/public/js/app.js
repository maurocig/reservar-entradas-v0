// Import
import { Entrada, crearEntrada, calcularPrecio } from './entradas.js';
import { Evento } from './eventos.js';
import { Usuario } from './usuarios.js';

// Variables
let entradasReservadas = [];
let entradas = [];
const eventos = [];
const username = 'Juan01';
let total = 0;

let eventosGrid = document.querySelector('#eventos-grid');
let conteo = document.querySelector('#conteo');

// eventos.push(new Evento('La Skatomica', '6-2', 'El Club Bar', 'Honduras 5028', '6/2', '22:00', 200));
eventos.push(new Evento(['Combustión Reggae', 'Sabancaya'], '14-3', 'Shambala House', 'Costa Rica 5673', '14-3', '22:00', 300));
eventos.push(new Evento('La Skatomica', '20-3', 'El Club Bar', 'Honduras 5028', '6/2', '22:00', 200));
eventos.push(new Evento('Les Pistaches', '9-4', 'Paseo Inmoral Social Club', 'Cabrera 5100', '9/04', '20:00', 500));
eventos.push(new Evento('Perro', '16-4', 'Paseo Inmoral Social Club', 'Cabrera 5100', '16/04', '20:00', 500));
eventos.push(new Evento(['Tchanko y Familia', 'DJ Jamming'], '17-4', 'El Club Bar', 'Honduras 5028', '17/04', '22:00', 800));
eventos.push(new Evento(['Camaleonpaex', 'DJ Jamming'], '21-8', 'El Club Bar', 'Honduras 5028', '21-8', '22:00', 800));
eventos.push(new Evento(['Cehache Respira', 'Ana Sol y La Candela'], '23-8', 'El Club Bar', 'Honduras 5028', '23-8', '22:00', 500));
eventos.push(new Evento(['Sabancaya', 'DJ Jamming'], '18-9', 'El Club Bar', 'Honduras 5028', '18-9', '22:00', 800));
eventos.push(new Evento(['Buena Cosecha', 'DJ Jamming'], '2-10', 'El Club Bar', 'Honduras 5028', '2-10', '22:00', 800));
eventos.push(new Evento(['Bemba', 'DJ Jamming'], '16-10', 'El Club Bar', 'Honduras 5028', '16-10', '22:00', 800));
eventos.push(new Evento(['The Walking Ska', 'Preciosa Venus'], '18-10', 'El Club Bar', 'Honduras 5028', '18-10', '22:00', 700));
eventos.push(new Evento(['El Capitan Digital Version', 'DJ Jamming'], '30-10', 'El Club Bar', 'Honduras 5028', '30-10', '22:00', 700));

for (let evento of eventos) {
	evento.makeId();
	// console.log(evento.getId());

	let index = eventos.indexOf(evento) + 1;
	let divEvento = document.createElement('div');
	divEvento.setAttribute('id', `evento-${index}`);
	divEvento.setAttribute('class', 'div-evento');

	// Agregar un form para cada evento
	let form = document.createElement('form');
	form.setAttribute('id', `form-${index}`)
	form.innerHTML =
		`
		<label for="cantidad">Cantidad: </label>
		<input type="number" name="input-cantidad-${index}" id="input-cantidad-${index}">
		<button id="botonAgregar">Agregar</button>
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
			let nuevaEntrada = crearEntrada(evento.nombre, evento.precio, username, evento.getId());
			nuevaEntrada.makeId();
			entradas.push(nuevaEntrada);
			total += evento.precio;
		}
		console.log(`${cantidad} entradas para ${evento.nombre}......$${subtotal}`);
		console.log(entradas);
		conteo.innerText = `Total: ${entradas.length} entradas .... $${total}`;
	});

}
