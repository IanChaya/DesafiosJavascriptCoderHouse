// Declaro las variables a utilizar

class comida {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
}

class bebida {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
}

class menu {
	constructor(comida, bebida, precio) {
		this.comida = comida;
		this.bebida = bebida;
		this.precio = precio;
	}
}

const comida1 = new comida("Milanesa con Papas Fritas", 1500);
const comida2 = new comida("Hamburguesa Completa", 1100);
const comida3 = new comida("Super Pancho", 750);

const bebida1 = new bebida("Agua", 250);
const bebida2 = new bebida("Coca Cola", 350);
const bebida3 = new bebida("Sprite", 300);

let comidas = [comida1, comida2, comida3];
let bebidas = [bebida1, bebida2, bebida3];


let precioComidaElegida = 0;
let precioBebidaElegida = 0;
let precioMenu = 0;
let precioTotal = 0;
let eleccionBebida = 0;
let eleccionComida = 0;
let menues = [];
let menuestring = [];
// Declaro las funciones a utilizar

const elegirMenu = () => {
	while (eleccionComida != 1 && eleccionComida != 2 && eleccionComida != 3) {
		eleccionComida = parseInt(
			prompt(
				`Elija su comida. Nuestras opciones son: \n 1 - ${comida1.nombre} | $${comida1.precio} \n 2 - ${comida2.nombre} | $${comida2.precio} \n 3 - ${comida3.nombre} | $${comida3.precio}`
			)
		);
	}
	while (eleccionBebida != 1 && eleccionBebida != 2 && eleccionBebida != 3) {
		eleccionBebida = parseInt(
			prompt(
				`Elija su bebida. Nuestras opciones son: \n 1 - ${bebida1.nombre} | $${bebida1.precio} \n 2 - ${bebida2.nombre} | $${bebida2.precio} \n 3 - ${bebida3.nombre} | $${bebida3.precio}`
			)
		);
	}
};

// const mostrarMenu = (eleccionComida, eleccionBebida) => {
// 	let comidaElegida = comidas[eleccionComida - 1].nombre;
// 	let bebidaElegida = bebidas[eleccionBebida - 1].nombre;
// 	alert(`Usted eligio comer ${comidaElegida} y beber ${bebidaElegida}`);
// };

// const mostrarPrecio = (eleccionComida, eleccionBebida) => {
// 	precioComidaElegida = comidas[eleccionComida - 1].precio;
// 	precioBebidaElegida = bebidas[eleccionBebida - 1].precio;

// 	let precioTotal = calcularPrecio(precioComidaElegida, precioBebidaElegida);

// 	alert(`El precio total es: $${precioTotal}`);
// };

 const crearMenu = (eleccionComida, eleccionBebida) => {
 	let comidaElegida = comidas[eleccionComida - 1].nombre;
 	let bebidaElegida = bebidas[eleccionBebida - 1].nombre;
	precioComidaElegida = comidas[eleccionComida - 1].precio;
	precioBebidaElegida = bebidas[eleccionBebida - 1].precio;
	precioMenu = calcularPrecio(precioComidaElegida, precioBebidaElegida);

	let nuevoMenu = new menu(comidaElegida,bebidaElegida,precioMenu);
 	menues.push(nuevoMenu);
 };

const calcularPrecio = (precioComidaElegida, precioBebidaElegida) => {
	return (precioMenu = precioComidaElegida + precioBebidaElegida);
};

// Interactuo con el usuario mediante las funciones definidas

let confirmacion = prompt("Desea realizar un pedido? Ingrese si o no");

while (confirmacion.toLowerCase() === "si") {
	elegirMenu();
	crearMenu(eleccionComida, eleccionBebida);

	// mostrarMenu(eleccionComida, eleccionBebida);
 	// calcularPrecio(eleccionComida, eleccionBebida);
 	// mostrarPrecio(eleccionComida, eleccionBebida);

	confirmacion = prompt("Desea realizar otro pedido? Ingrese si o no");
	eleccionBebida = 0;
	eleccionComida = 0;
}

 for (let i=0; i<menues.length;i++)
 {
	menuestring [i] = `${i+1} - ${menues[i].comida} + ${menues[i].bebida} : $${menues[i].precio} \n`;
	precioTotal = precioTotal + menues[i].precio;
 }

 mensaje = `Usted ordeno:\n ${menuestring}\n Precio total: $${precioTotal}`;
 alert (mensaje.replace(/,/g,' '));

console.log(menues);
