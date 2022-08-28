let juegoNuevo = prompt("Quieres jugar un juego? Escribe si o no");
let numeroRandom = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
contadorIntentos = 0;

if (juegoNuevo.toLowerCase() === "si") {
	numeroUsuario = prompt(
		"Ingresa un numero del 1 al 10, si adivinas el que yo pensé, ganaste!!"
	);
}

while (juegoNuevo.toLowerCase() === "si") {
	if (numeroRandom == numeroUsuario) {
		contadorIntentos = contadorIntentos + 1;
		alert(`Ganaste en ${contadorIntentos} intentos!!`);
		juegoNuevo = prompt("Quieres jugar de nuevo?");
		if (juegoNuevo.toLowerCase() === "si") {
			numeroRandom = Math.floor(Math.random() * 10) + 1;
			contadorIntentos = 0;
			numeroUsuario = prompt(
				"Ingresa un numero del 1 al 10, si adivinas el que yo pensé, ganaste!!"
			);
		}
	} else if (numeroRandom != numeroUsuario) {
		numeroUsuario = prompt(
			"Segui participando! Ingresa otro numero del 1 al 10"
		);
		contadorIntentos = contadorIntentos + 1;
	}
}
