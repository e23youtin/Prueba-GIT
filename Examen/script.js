/*Óscar Arroyo Aguadero*/
'use strict'
console.log('Script cargado correctamente.');

let ficheros = ['d1.txt', 'd2.txt'];

// Carga de ficheros de datos de entrada
ficheros.forEach((fichero) => {
  fetch(fichero) // Carga el fichero
    .then((respuesta) => respuesta.text()) // Saca el texto
    .then(funcion1) // Pasa el texto a funcion1
    .catch((error) => console.error(`Error al cargar ${fichero}: ${error.message}`)); // Maneja errores de carga
});

function funcion1(entrada) {
  if (!entrada.trim()) {
    // El archivo está vacío
    throw new Error('El archivo está vacío.');
  }
  const lista = entrada.split("\r\n");

  let equiposJugadores = [];
  for (let i = 0; i<lista.length;i++){
    
    let [equipo, jugador] = lista[i].split(',');

    if (!equipo || !jugador) {
      // La línea no tiene ambos elementos "club" y "jugador"
      throw new Error("Error de formato");
    }

    let nomClub = equipo.replace(/"/g, '').trim();

    let nomJugador = jugador.replace(/"/g, '').trim();
    if (!equiposJugadores[nomClub]) {
      equiposJugadores[nomClub] = [];
    }

    equiposJugadores[nomClub].push(nomJugador);
  }

  for (const club in equiposJugadores) {
    const jugadores = equiposJugadores[club].join(', ');
    console.log(`${club} = ${jugadores}`);
  }  
}
