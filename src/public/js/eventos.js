import { agregarEntradas, Entrada, entradasAgregadas } from "./entradas.js";

let eventosGrid = document.querySelector('#eventos-grid');
let fechas = ['14-3', '20-3', '9-4', '16-4', '17-4', '21-8', '23-8', '18-9', '2-10', '16-10', '18-10', '30-10', '1-11', '13-11', '27-11', '29-11'];
const eventos = [];
let conteoEntradas = 0;

function Evento(artista, imagen, lugar, direccion, fecha, horario, precio) {
	this.nombre = `${artista} en ${lugar}`;
	this.artista = artista;
	this.imagen = imagen;
	this.lugar = lugar;
	this.direccion = direccion;
	this.fecha = fecha;
	this.horario = horario;
	this.precio = precio;
	this.entradas = [];
	this.cupo = 200;
}

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
	let index = eventos.indexOf(evento) + 1;
	let divEvento = document.createElement('div');
	divEvento.setAttribute('id', `evento-${index}`);
	divEvento.setAttribute('class', 'div-evento');

	let form = document.createElement('form');
	form.setAttribute('id', `form-${index}`)
	form.innerHTML =
		`
		<label for="cantidad">Cantidad: </label>
		<input type="number" name="input-cantidad-${index}" id="input-cantidad-${index}">
		<button id="botonAgregar">Agregar</button>
	`
	divEvento.appendChild(form);

	// let btnReservar = document.createElement('button');
	// btnReservar.innerText = 'Reservar entradas';
	// btnReservar.setAttribute('id', `evento-btn-${index}`)
	// divEvento.appendChild(btnReservar);

	let img = document.createElement('img');
	img.setAttribute('src', `public/img/flyers/${evento.imagen}.jpg`);
	divEvento.appendChild(img);
	eventosGrid.appendChild(divEvento);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		let input = document.querySelector(`#input-cantidad-${index}`);
		let cantidad = input.value;
		let nuevaEntrada = agregarEntradas(cantidad);
		evento.entradas.push(nuevaEntrada);
		console.log(`${cantidad} entradas para ${evento.nombre}`);
		console.log(entradasAgregadas);
	})

	let guardadas = JSON.parse(localStorage.getItem('entradas'));
	if (!guardadas) {
		localStorage.setItem('entradas', JSON.stringify(entradasAgregadas));
		console.log(localStorage);
	}
	// 

}

