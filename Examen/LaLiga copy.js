console.log('Script cargado correctamente.');

let ficheros = ['d1.txt'];

// Carga de ficheros de datos de entrada
ficheros.forEach((fichero) => {
  fetch(fichero) // Carga el fichero
    .then((respuesta) => respuesta.text()) // Saca el texto
    .then(funcion1); // Pasa el texto a funcion1
});

function funcion1(entrada) {
  const lista = entrada.split("\n");
  const clubesJugadores = {};
  if (!entrada) {
    throw 'El fichero está vacío';
}
  for (let i = 0; i < lista.length; i++) {
    const [equipo, jugador] = lista[i].split(',');

    const nombreClub = equipo.replace(/"/g, '').trim();
    const nombreJugador = jugador.replace(/"/g, '').trim();

    // Verifica si el club ya existe en el objeto, si no existe, crea un arreglo vacío
    if (!clubesJugadores[nombreClub]) {
      clubesJugadores[nombreClub] = [];
    }

    // Agrega el jugador al club correspondiente
    clubesJugadores[nombreClub].push(nombreJugador);
  }

  // Imprime la salida deseada en la consola
  for (const club in clubesJugadores) {
    if (clubesJugadores.hasOwnProperty(club)) {
      const jugadores = clubesJugadores[club].join(', ');
      console.log(`${club} = ${jugadores}`);
    }
  }
}
