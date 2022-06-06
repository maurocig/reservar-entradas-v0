// import { Entrada } from './entradas.js';
let entradasReservadas = JSON.parse(localStorage.getItem('Entradas Reservadas'));
console.log(entradasReservadas);

for (let entrada of entradasReservadas) {
	console.log(entrada);
	let gridContainer = document.querySelector('.grid-container');
	let divEntrada = document.createElement('div');
	divEntrada.classList.add('card');
	divEntrada.innerHTML =
		`
			<img src="../img/flyers/${entrada.imagen}.jpg" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${entrada.nombreEvento}</h5>
		<!-- <p class="card-text"></p>-->
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Precio: $${entrada.precio}</li>
				<li class="list-group-item">Fecha: ${entrada.fecha}</li>
				<li class="list-group-item">Hora: ${entrada.horario}</li>
			<li class="list-group-item">Direccion: ${entrada.direccion}</li>
			</ul>
		<!--
			<div class="card-body">
				<a href="#" class="card-link">Card link</a>
				<a href="#" class="card-link">Another link</a>
			</div>
		-->
		`

	gridContainer.appendChild(divEntrada);
	document.body.appendChild(gridContainer);
}
