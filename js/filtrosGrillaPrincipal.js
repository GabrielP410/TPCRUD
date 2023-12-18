let estadosBotones;

if (!window.estadosBotonesInitialized) {
    // Objeto para almacenar el estado de los botones
    estadosBotones = {};
  
    // Obtener los botones por su clase
    const botones = document.querySelectorAll('.botonFiltroPrincipal');
  
    // Inicializar el estado de los botones en el objeto
    botones.forEach((boton) => {
      const botonId = boton.id;
      estadosBotones[botonId] = false; // Por defecto, ninguno tiene el icono
    });
  
    console.log(estadosBotones);
  
    // Función para manejar el clic en los botones
    function toggleIcono(e) {
      const boton = e.target;
      const botonId = boton.id;
  
      if (!estadosBotones[botonId]) {
        boton.innerHTML += ' <i class="bi bi-check-lg"></i>';
        estadosBotones[botonId] = true; // Cambia el estado a true
      } else {
        const icono = boton.querySelector('i');
        if (icono) {
          boton.removeChild(icono);
        }
        estadosBotones[botonId] = false; // Cambia el estado a false
      }
  
      console.log(`Estado del botón '${botonId}': ${estadosBotones[botonId]}`);
    }
  
    // Agregar evento de clic a cada botón para agregar/eliminar el icono
    botones.forEach((boton) => {
      boton.addEventListener('click', toggleIcono);
    });
  
    // Marcar que la inicialización se ha completado
    window.estadosBotonesInitialized = true;
  }
  // Obtener el botón por su ID
const verEstadoBotonesBtn = document.getElementById('verEstadoBotonesBtn');

// Función para mostrar el estado de los botones en la consola
function mostrarEstadosBotones() {
  console.log(estadosBotones);
}

// Agregar evento de clic al botón para mostrar el array
verEstadoBotonesBtn.addEventListener('click', mostrarEstadosBotones);
