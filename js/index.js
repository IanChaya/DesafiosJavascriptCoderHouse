// Declaro las variables a utilizar

const comida1 = "Milanesa con Papas fritas";
const comida2 = "Hamburguesa completa";
const comida3 = "Super Pancho";
const precioComida1 = 1500;
const precioComida2 = 1100;
const precioComida3 = 750;
const bebida1 = "Agua";
const bebida2 = "Coca Cola";
const bebida3 = "Sprite";
const precioBebida1 = 250;
const precioBebida2 = 350;
const precioBebida3 = 300;
let precioComidaElegida = 0;
let precioBebidaElegida = 0;
let precioTotal = 0;
let eleccionBebida;
let eleccionComida;

// Declaro las funciones a utilizar

const elegirMenu = () => {
	eleccionComida = parseInt(
		prompt(
			`Elija su comida. Nuestras opciones son: \n 1 - ${comida1} | $${precioComida1} \n 2 - ${comida2} | $${precioComida2} \n 3 - ${comida3} | $${precioComida3}`
		)
	);

	eleccionBebida = parseInt(
		prompt(
			`Elija su bebida. Nuestras opciones son: \n 1 - ${bebida1} | $${precioBebida1} \n 2 - ${bebida2} | $${precioBebida2} \n 3 - ${bebida3} | $${precioBebida3}`
		)
	);
};

const correspondenciaComida = (eleccionComida) => {
	switch (eleccionComida) {
		case 1:
			return comida1;
		case 2:
			return comida2;
		case 3:
			return comida3;
	}
};

const correspondenciaBebida = (eleccionBebida) => {
	switch (eleccionBebida) {
		case 1:
			return bebida1;
		case 2:
			return bebida2;
		case 3:
			return bebida3;
	}
};

const correspondenciaPrecioComida = (eleccionComida) => {
	switch (eleccionComida) {
		case 1:
			return precioComida1;
		case 2:
			return precioComida2;
		case 3:
			return precioComida3;
	}
};

const correspondenciaPrecioBebida = (eleccionBebida) => {
	switch (eleccionBebida) {
		case 1:
			return precioBebida1;
		case 2:
			return precioBebida2;
		case 3:
			return precioBebida3;
	}
};

const mostrarMenu = (eleccionComida, eleccionBebida) => {
	let comidaElegida = correspondenciaComida(eleccionComida);
	let bebidaElegida = correspondenciaBebida(eleccionBebida);
	alert(`Usted eligio comer ${comidaElegida} y beber ${bebidaElegida}`);
};

const mostrarPrecio = (eleccionComida, eleccionBebida) => {
	precioComidaElegida = correspondenciaPrecioComida(eleccionComida);
	precioBebidaElegida = correspondenciaPrecioBebida(eleccionBebida);

	let precioTotal = calcularPrecio(precioComidaElegida, precioBebidaElegida);

	alert(`El precio total es: $${precioTotal}`);
};

const calcularPrecio = (precioComidaElegida, precioBebidaElegida) => {
	return (precioTotal = precioComidaElegida + precioBebidaElegida);
};

// Interactuo con el usuario mediante las funciones definidas

let confirmacion = prompt("Desea realizar un pedido? Ingrese si o no");

while (confirmacion.toLowerCase() === "si") {
	elegirMenu();
	mostrarMenu(eleccionComida, eleccionBebida);
	calcularPrecio(eleccionComida, eleccionBebida);
	mostrarPrecio(eleccionComida, eleccionBebida);

	confirmacion = prompt("Desea realizar otro pedido? Ingrese si o no");
}
