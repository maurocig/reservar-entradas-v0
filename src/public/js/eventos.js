
let fechas = ['14-3', '20-3', '9-4', '16-4', '17-4', '21-8', '23-8', '18-9', '2-10', '16-10', '18-10', '30-10', '1-11', '13-11', '27-11', '29-11'];

const Evento = function (artista, imagen, lugar, direccion, fecha, horario, precio) {
	this.nombre = `${artista} en ${lugar}`;
	this.artista = artista;
	this.imagen = imagen;
	this.lugar = lugar;
	this.direccion = direccion;
	this.fecha = fecha;
	this.horario = horario;
	this.precio = precio;
	this.cupo = 200;

	let id = 1000;
	this.getId = () => id;
	this.makeId = () => {
		id = Math.floor(Math.random() * 10000);
		return id;
	}
}


// const holder = [];

// for (let i = 0; i < 10; i += 1) {
// 	holder.push(new Evento());
// 	console.log(holder[i].makeId());
// }

// const evt1 = new Evento();
// const evt2 = new Evento();
// evt1.makeId();
// evt2.makeId();
// console.log(evt2.getId())
// // console.log(evt1.getId());

export { Evento };
