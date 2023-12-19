let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;
let contadorProductos = parseInt(localStorage.getItem("contadorProductosCarrito")) || 0;

function inicializarCarrito() {

    // Cargar la información del localStorage
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    total = parseFloat(localStorage.getItem("total")) || 0;
    contadorProductos = carrito.reduce((total, item) => total + item.cantidad, 0);

    
    actualizarCarrito();
}

inicializarCarrito();


function agregarAlCarrito(nombre, precio, imagen) {
    const indice = carrito.findIndex(item => item.nombre === nombre);

    if (indice !== -1) {
        carrito[indice].cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1, imagen });
    }


    contadorProductos = carrito.reduce((total, item) => total + item.cantidad, 0);
    total += precio;

    // Guardar el carrito en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("total", total.toString());
    localStorage.setItem("contadorProductosCarrito", contadorProductos.toString());

    actualizarCarrito();
    
}

function actualizarCantidad(index, nuevaCantidad) {
    const cantidadAnterior = carrito[index].cantidad;
    
    if (!isNaN(parseFloat(nuevaCantidad)) && isFinite(nuevaCantidad) && nuevaCantidad >= 0) {
        carrito[index].cantidad = parseInt(nuevaCantidad, 10);
        //contadorProductos = carrito.reduce((total, item) => total + item.cantidad, 0);
        total += (carrito[index].cantidad - cantidadAnterior) * carrito[index].precio;

        // Guardar el carrito en el localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        localStorage.setItem("total", total.toString());

        actualizarCarrito();
    }
}

function borrarProducto(index) {
    const confirmacion = confirm("¿Seguro que quieres eliminar este producto del carrito?");

    if (confirmacion) {
        total -= carrito[index].precio * carrito[index].cantidad;
        //contadorProductos -= carrito[index].cantidad;
        carrito.splice(index, 1);

        // Guardar el carrito en el localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        localStorage.setItem("total", total.toString());
        //localStorage.setItem("contadorProductosCarrito", contadorProductos.toString());

        actualizarCarrito();
    }
}


function actualizarCarrito() {
    const carritoLista = document.getElementById("carritoLista");
    const totalPrecio = document.getElementById("totalPrecio");
    //const contadorProductosElement = document.getElementById("contadorProductosCarrito");

    //if (!contadorProductosElement) {
        // Manejar la situación donde el elemento no se encuentra
        //console.error("El elemento contadorProductosCarrito no se encontró.");
        //return;
    //}

    carritoLista.innerHTML = "";
    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-3 text-center">
                    <img src="${item.imagen}" alt="${item.nombre}" class="img-fluid">
                </div>
                <div class="col-lg-5">
                    <h5>${item.nombre}</h5>
                    <p>$${item.precio.toFixed(3)}</p>
                    <p>Código: 628895</p>
                </div>
                <div class="col-lg-2 text-end">  
                    <input type="number" class="form-control w-100" value="${item.cantidad}" min="1" onchange="actualizarCantidad(${index}, this.value)"                                                                   
                </div>
                <div>
                    <button class="btn btn-danger btn-sm w-100" onclick="borrarProducto(${index})">Borrar</button>
                </div>    
            </div> `;
        carritoLista.appendChild(li);
    });

    totalPrecio.textContent = total.toFixed(3);
   // contadorProductosElement.textContent = contadorProductos;

    // Actualizar el contador de productos en la interfaz
    //document.getElementById("contadorProductosCarrito").textContent = contadorProductos;

    mostrarCarritoModal();
}


