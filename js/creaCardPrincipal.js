// Función para generar una categoría aleatoria de las disponibles
function generarCategoriasAleatorias() {
    const categorias = [];
    let tieneCategoria = false;

    for (let i = 0; i < 4; i++) {
        const categoria = Math.random() < 0.5; // Devuelve true o false aleatoriamente
        categorias.push(categoria);

        if (categoria) {
            tieneCategoria = true;
        }
    }

    // Si ninguna categoría está seleccionada, elige una al azar
    if (!tieneCategoria) {
        const categoriaAleatoria = Math.floor(Math.random() * 4);
        categorias[categoriaAleatoria] = true;
    }

    return categorias;
}

function obtenerCategorias(categorias) {
    const categoriasTexto = [];

    if (categorias[0]) {
        categoriasTexto.push('Secos');
    }

    if (categorias[1]) {
        categoriasTexto.push('Frescos');
    }

    if (categorias[2]) {
        categoriasTexto.push('Mix');
    }

    if (categorias[3]) {
        categoriasTexto.push('Combos');
    }

    return categoriasTexto.join(', '); // Devuelve un string con las categorías separadas por coma
}

// Función para simular la creación de un producto
function simularCreacionProducto() {
    // Simula la creación de un producto y recibe una categoría al azar
    const catRandom = generarCategoriasAleatorias();
    console.log('Producto creado con la categoría:', catRandom);
    const precio = 3000;
    const codigo = 27367632;
    const identificador = 23;
    const descripcion = 'Almendras muy buenardas';
    const rutaImagen1 = './img/almendras.jpg';
    const rutaImagen2 = './img/almendras2';
    const rutaImagen3 = './img/almendras3.jpg';
    const textoCategorias = obtenerCategorias(catRandom);

    // Si tienes una función crearProducto y una variable categoriaAleatoria definidas previamente...
    crearProducto(catRandom, precio, codigo, identificador, descripcion, rutaImagen1, rutaImagen2, rutaImagen3, textoCategorias);
}

// Asociar la función simularCreacionProducto a un botón en tu HTML
const botonSimulacion = document.getElementById('botonSimulacion');
botonSimulacion.addEventListener('click', simularCreacionProducto);

function crearProducto(categorias, precio, codigo, identificador, descripcion, rutaImagen1, rutaImagen2, rutaImagen3, textoCategorias) {
    const cardProducto = document.createElement('div');

    cardProducto.classList.add('col-lg-3', 'col-md-4', 'col-6', 'mt-3', 'mb-5', 'cardProducto');
    cardProducto.innerHTML = `
        <div class="card" data-bs-toggle="modal" data-bs-target="#modalAllCardsMain">
            <img src="${rutaImagen1}" class="card-img-top img-fluid imgProductos" alt="${descripcion}">
            <div class="card-body">
                <h5 class="card-title">${descripcion}</h5>
                <p class="card-text">Categorías: ${textoCategorias}</p>
                <p class="card-text">$${precio}</p>
            </div>
        </div>
    `;

    // Agregar tanto la card como el modal al contenedor 'grillaPrincipal'
    const grillaPrincipal = document.getElementById('grillaPrincipal');
    grillaPrincipal.appendChild(cardProducto);
}
