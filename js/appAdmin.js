import Producto from "./classAgregarProductoAdmin.js";

// cosntantes

const modalAdminProducto = new bootstrap.Modal(
  document.getElementById("adminProducto")
);

const botonAgregarProductoAdmin = document.getElementById(
  "botonAgregarProductoAdmin"
);

const formularioAgregarProductoAdmin = document.getElementById(
  "formAgregarProductoAdmin"
);

// datos productos
const nombreProducto = document.getElementById("nombre_prod_cargado");
const codigo = document.getElementById("codigo_del_producto_card_admin");
const detalleProducto = document.getElementById("descripcion_del_prod_cargado");

const checkcategoria = document.getElementById("categoria");

const presentacionAdmin = document.getElementById("presentacionAdmin");

const stockAdmin = document.getElementById("stock_prod_cargado_admin");

const precioProductAdmin = document.getElementById("precio_prod_cargado_admin");

const imagenProductoAdmin = document.getElementById("cargarimagen");

const productosCargadosAdmin = [];

// funciones
const mostrarModal = () => {
  modalAdminProducto.show();
};


// producto
const crearProducto = (e) => {
  e.preventDefault();

  

//   crea el prodcuto
  const nuevoProducto = new Producto(
    nombreProducto.value,
    undefined,
    checkcategoria.value,
    presentacionAdmin.value,
    stockAdmin.value,
    detalleProducto.value,
    precioProductAdmin.value,
    imagenProductoAdmin.value
  );
  console.log(nuevoProducto);

  // array de productos
  productosCargadosAdmin.push(nuevoProducto);
  console.log(productosCargadosAdmin);

  // resetear el formulario
  limpiarformulario();
// guarda en localstorage

guardarEnLocalStorageAdmin();

};

function limpiarformulario() {
  formularioAgregarProductoAdmin.reset();
};

function guardarEnLocalStorageAdmin(){
    localStorage.setItem('productosCargadosAdminKey',JSON.stringify(productosCargadosAdmin))
}
// logica extra

botonAgregarProductoAdmin.addEventListener("click", mostrarModal);

formularioAgregarProductoAdmin.addEventListener("submit", crearProducto);
