import Producto from "./classProducto.js";

const modalAgregarProducto = new bootstrap.Modal(document.getElementById('agregarProductosModal'));
const btnAgregarProducto = document.getElementById('btnNuevoProducto')
const nuevoformularioProducto = document.getElementById('formularioProducto')
console.log(formularioProducto)
btnAgregarProducto.addEventListener("click", abrirModalClick)

function limpiarFormulario() {
    nuevoformularioProducto.reset();
}

function abrirModalClick() {
    limpiarFormulario();
    modalAgregarProducto.show();
}

