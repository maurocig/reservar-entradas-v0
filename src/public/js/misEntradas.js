let entradasReservadas = JSON.parse(localStorage.getItem('Entradas Reservadas'));
console.log(entradasReservadas);

for (let entrada of entradasReservadas) {
	console.log(entrada);
	let divEntrada = document.createElement('div');
	divEntrada.innerHTML =
		`
			<h2>${entrada.nombreEvento}</h2>
			<p>Precio: ${entrada.precio}</p>
		`
	document.body.appendChild(divEntrada);
}
