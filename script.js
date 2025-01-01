// script.js

// Función para mostrar la dedicatoria al hacer clic en el botón
function mostrarDedicatoria() {
    // Ocultar la pantalla con el nombre y mostrar la dedicatoria
    const pantallaNombre = document.getElementById('pantalla-nombre');
    const pantallaDedicatoria = document.getElementById('pantalla-dedicatoria');
    pantallaNombre.classList.add('hidden');
    pantallaDedicatoria.classList.remove('hidden');
}

// Función para mostrar el mensaje final
function mostrarMensaje() {
    // Ocultar la dedicatoria y mostrar el mensaje final
    const pantallaDedicatoria = document.getElementById('pantalla-dedicatoria');
    const mensajeFinal = document.getElementById('mensaje-final');
    pantallaDedicatoria.classList.add('hidden');
    mensajeFinal.classList.remove('hidden');
}

// Generar corazones que caen de forma aleatoria
function generarCorazones() {
    const cantidadCorazones = 30; // Número de corazones que caen
    for (let i = 0; i < cantidadCorazones; i++) {
        let corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.innerHTML = '❤️';
        // Posición aleatoria en el eje X
        corazon.style.left = `${Math.random() * 100}vw`;
        // Añadir el corazón al body
        document.body.appendChild(corazon);

        // Eliminar el corazón después de que haya caído
        setTimeout(() => {
            corazon.remove();
        }, 4000);
    }
}

// Llamar a la función de generar corazones cada segundo
setInterval(generarCorazones, 1000);
