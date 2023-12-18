import Producto from "./classAgregarProductoAdmin.js";


// cosntantes
const producto = new Producto ('nueces','COD','ilimitado','son nueces','5000', 'aca va laimagen');



const modalAdminProducto = new bootstrap.Modal(document.getElementById('adminProducto'));

const botonAgregarProductoAdmin = document.getElementById('botonAgregarProductoAdmin');

// funciones
const mostrarModal = () =>{
    modalAdminProducto.show();
    
}


// logica extra

botonAgregarProductoAdmin.addEventListener('click',mostrarModal);

