document.addEventListener('DOMContentLoaded', function () {
    const busqueda = document.getElementById('busqueda');
    const seccionProductos = document.getElementById('seccionProductos');
    const productos = seccionProductos.getElementsByClassName('cardProducto');

    busqueda.addEventListener('input', function () {
        const searchTerm = busqueda.value.toLowerCase();

        // muestra y oculta los productos
        for (let i = 0; i < productos.length; i++) {
            const productName = productos[i].getAttribute('data-name').toLowerCase();

            if (productName.includes(searchTerm)) {
                productos[i].style.display = 'block';
            } else {
                productos[i].style.display = 'none';
            }
        }
    });

    // iniciar la búsqueda
    function iniciarBusqueda(parametro) {
        busqueda.value = parametro.toLowerCase();

        const inputEvent = new Event('input');
        busqueda.dispatchEvent(inputEvent);
    }
});