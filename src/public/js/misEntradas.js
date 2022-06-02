let entradasReservadas = JSON.parse(localStorage.getItem('Entradas Reservadas'));
console.log(entradasReservadas);

for (let entrada of entradasReservadas) {
	console.log(entrada);
	let divEntrada = document.createElement('div');
	let h2 = document.createElement('h2');
	h2.innerText = entrada.nombreEvento;
	divEntrada.appendChild(h2);
	document.body.appendChild(divEntrada);
}
