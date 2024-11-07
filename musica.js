// Selecciona el botón y el menú
const toggleButton = document.getElementById("toggleMenu");
const menuMusica = document.getElementById("menuMusica");

// Evento para abrir/cerrar el menú
toggleButton.addEventListener("click", () => {
    menuMusica.classList.toggle("abierto");
});

// Elemento de audio
const audioPlayer = document.getElementById("audioPlayer");

// Función para reproducir una canción específica
function playSong(song) {
    audioPlayer.src = song;    // Asigna la fuente de la canción
    audioPlayer.play();        // Reproduce la canción
}

// Función para continuar la reproducción
function playAudio() {
    audioPlayer.play();
}

// Función para pausar la reproducción
function pauseAudio() {
    audioPlayer.pause();
}

// Función para detener la reproducción
function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reinicia el audio
}
