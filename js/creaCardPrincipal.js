    // ... lógica para crear el producto

// Función para generar una categoría aleatoria de las disponibles
function generarCategoriaAleatoria() {
    const categorias = ['Secos', 'Frescos', 'Mix', 'Combos'];
    const indiceAleatorio = Math.floor(Math.random() * categorias.length);
    return categorias[indiceAleatorio];
}

// Función para simular la creación de un producto
function simularCreacionProducto() {
    // Simula la creación de un producto y recibe una categoría al azar
    const categoriaAleatoria = generarCategoriaAleatoria();
    console.log('Producto creado con la categoría:', categoriaAleatoria);

    // Llama a la función crearProducto con la categoría aleatoria
    crearProducto(categoriaAleatoria);
    console.log(categoriaAleatoria)
}

// Asociar la función simularCreacionProducto a un botón en tu HTML
const botonSimulacion = document.getElementById('botonSimulacion');
botonSimulacion.addEventListener('click', simularCreacionProducto);

function crearProducto(categoria) {
    // Crea una nueva tarjeta con la clase catPrincipalCard y el atributo data-categoria
    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.setAttribute('data-categoria', categoria);
    nuevaTarjeta.classList.add('col-3','bg-danger','text-center'); 
    
    // Establece el contenido de la tarjeta (por ahora, solo el texto de la categoría)
    nuevaTarjeta.textContent = categoria;

    // Agrega la tarjeta a la grilla principal (asumiendo que 'grillaPrincipal' es el contenedor)
    const grillaPrincipal = document.getElementById('grillaPrincipal');
    grillaPrincipal.insertBefore(nuevaTarjeta, grillaPrincipal.firstChild);
    // grillaPrincipal.before(nuevaTarjeta)
}
