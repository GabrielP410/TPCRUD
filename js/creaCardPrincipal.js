function crearProducto(categorias, precio, codigo, descp, rutaImagen1, nombre) {
    const cardProducto = document.createElement('div');

    cardProducto.classList.add('col-lg-3', 'col-md-4', 'col-6', 'mt-3', 'mb-5', 'cardProducto');
    cardProducto.setAttribute('data-categorias', categorias);
    cardProducto.innerHTML = `
        <div class="card cardCreada h-100" data-bs-toggle="modal" data-bs-target="#modalAllCardsMain">
            <img src="${rutaImagen1}" class="card-img-top img-fluid imgProductos" alt="">
            <div class="card-body cardBodyMain">
                <h5 class="card-title">${nombre}</h5>
                
                <p class="card-text parrafoDeCategoria">Categorías: ${categorias}</p> <!-- Corregido: Utiliza la variable categorias -->
                <p class="card-text">${descp}</p>
                <p class="card-text">Código de Producto ${codigo}</p>
                <p class="card-text">$${precio}</p>
            </div>
        </div>
    `;
    const grillaPrincipal = document.getElementById('grillaPrincipal');
    grillaPrincipal.prepend(cardProducto);}

const productosGuardadosString = localStorage.getItem('productosCargadosAdminKey');

if (productosGuardadosString) {
    const arraysDeProductos = JSON.parse(productosGuardadosString);

    arraysDeProductos.forEach((objetoEncontrado, index) => {
        console.log(`Array de productos en la posición ${index}:`, objetoEncontrado);
        crearProducto(objetoEncontrado.categoria, objetoEncontrado.precio, objetoEncontrado.cod, objetoEncontrado.descripcion, objetoEncontrado.image, objetoEncontrado.nombre);
    });
} else {
    console.log('No se encontraron arrays de productos en localStorage');
} 

function obtenerCategorias() {
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

let catFiltros = [false, false, false, false];
document.addEventListener("DOMContentLoaded", function () {
    let botones = document.querySelectorAll(".botonFiltroPrincipal");

    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            let icono = boton.querySelector("i.bi-check-lg");
            if (!icono) {
                icono = document.createElement("i");
                icono.classList.add("bi", "bi-check-lg");
                boton.appendChild(icono);
            } else {
                boton.removeChild(icono);
            }
            let nuevoEstado = obtenerEstadoFiltros();
            catFiltros = nuevoEstado;
            actualizarTarjetas();
        });
    });

    // Llamamos a esta función al inicio para configurar las tarjetas según los filtros iniciales
    actualizarTarjetas();
});

function actualizarTarjetas() {
    const tarjetas = document.querySelectorAll('.cardProducto');
    const filtrosActivos = catFiltros.some(filtro => filtro);

    tarjetas.forEach(function (tarjeta) {
        const categoriasTarjeta = tarjeta.getAttribute('data-categorias').split(', ');

        const mostrar = categoriasTarjeta.some(function (categoria, index) {
            return (categoria === 'Seco' && catFiltros[0]) ||
                   (categoria === 'Fresco' && catFiltros[1]) ||
                   (categoria === 'Mix' && catFiltros[2]) ||
                   (categoria === 'Combo' && catFiltros[3]) ||
                   !filtrosActivos;
        });

        if (mostrar) {
            tarjeta.classList.remove('d-none');
        } else {
            tarjeta.classList.add('d-none');
        }
    });
}
function obtenerEstadoFiltros() {
    let estadoDeFiltros = [];

    let clases = ['filtFrutosSecos', 'filtFrutosFrescos', 'filtMixVariados', 'filtCombosImperdibles'];

    clases.forEach(function (clase) {
        let botones = document.querySelectorAll(".botonFiltroPrincipal." + clase);
        let tieneIcono = Array.from(botones).some(function (boton) {
            return boton.querySelector("i.bi-check-lg");
        });
        estadoDeFiltros.push(tieneIcono);
    });
    return estadoDeFiltros;
}
