import Producto from "./classAgregarProductoAdmin.js";


// cosntantes
const producto = new Producto ('nueces','COD','ilimitado','son nueces','5000', 'aca va laimagen');



const modalAdminProducto = new bootstrap.Modal(document.getElementById('adminProducto'));

const botonAgregarProductoAdmin = document.getElementById('botonAgregarProductoAdmin');

const formularioAgregarProductoAdmin = document.getElementById('formAgregarProductoAdmin');


// funciones
const mostrarModal = () =>{
    modalAdminProducto.show();
    console.log('algo')

}

const crearProducto = (e) =>{
e.preventDefault()
console.log('creaprodducto');
}


// logica extra

botonAgregarProductoAdmin.addEventListener('click',mostrarModal);

formularioAgregarProductoAdmin.addEventListener('submit',crearProducto)