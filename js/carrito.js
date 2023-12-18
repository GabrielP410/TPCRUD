let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio, imagen) {
    const indice = carrito.findIndex(item => item.nombre === nombre);

    if (indice !== -1) {
        carrito[indice].cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1, imagen });
    }

    total += precio;

    actualizarCarrito();
}

function actualizarCantidad(index, nuevaCantidad) {
    const cantidadAnterior = carrito[index].cantidad;
    
    if (!isNaN(parseFloat(nuevaCantidad)) && isFinite(nuevaCantidad) && nuevaCantidad >= 0) {
        carrito[index].cantidad = parseInt(nuevaCantidad, 10);
        total += (carrito[index].cantidad - cantidadAnterior) * carrito[index].precio;
        actualizarCarrito();

        // Cerrar la ventana modal manualmente
        const carritoModal = new bootstrap.Modal(document.getElementById("carritoModal"));
        carritoModal.hide();
    } else {
        alert("Por favor, ingrese una cantidad válida.");
    }
}

function borrarProducto(index) {
    const confirmacion = confirm("¿Seguro que quieres eliminar este producto del carrito?");

    if (confirmacion) {
        total -= carrito[index].precio * carrito[index].cantidad;
        carrito.splice(index, 1);
        actualizarCarrito();
    }
}


function actualizarCarrito() {
    const carritoLista = document.getElementById("carritoLista");
    const totalPrecio = document.getElementById("totalPrecio");

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

    mostrarCarritoModal();
}


