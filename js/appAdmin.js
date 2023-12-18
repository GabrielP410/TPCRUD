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

const productosCargadosAdmin =
  JSON.parse(localStorage.getItem("productosCargadosAdminKey")) || [];

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

  // array de productos
  productosCargadosAdmin.push(nuevoProducto);

  // resetear el formulario
  limpiarformulario();
  // guarda en localstorage

  guardarEnLocalStorageAdmin();
};

function limpiarformulario() {
  formularioAgregarProductoAdmin.reset();
}

function guardarEnLocalStorageAdmin() {
  localStorage.setItem(
    "productosCargadosAdminKey",
    JSON.stringify(productosCargadosAdmin)
  );
}

function crearCardProducto(productoAdmin) {
  const cardProductoAdmin = document.getElementById("cardProductoAdminCrear");
  cardProductoAdmin.innerHTML =
    cardProductoAdmin.innerHTML +
    `<div class="card_producto_admin" >
   <img src="../img/almendras2.png" class="card-img-top" id="card_producto_editar_admin" alt="...">
   <div class="card-body">
     <h4 class="card-title" id="nombre_del_producto_card_admin">${productoAdmin.nombre}</h4>
     <h5 class="card-title" id="codigo_del_producto_card_admin">${productoAdmin.cod}</h5>
     <p class="card-text" id="descripcion_del_producto_admin">${productoAdmin.descripcion}</p>
     <div class="d-flex justify-content-between">
       <h5 id="categoriaProductoAdmin">${productoAdmin.categoria}</h5>
       <h5 id="presentacionProductoAdmin">${productoAdmin.presentacion}</h5>
     </div>
     <div class="d-flex justify-content-between align-content-center my-2">
       <h5 class="stock_admin card-title" id="stock_del_producto_admin">
         STOCK ${productoAdmin.stock}
       </h5>
     <h5 class=" text-end" id="precio_del_prudcto_admin"> PRECIO $ ${productoAdmin.precio}</h5>
   </div>
     <a href="#" class="btn btn_editar_admin texto_blanco_btn_amdin">Editar</a>
   </div>
   </div>
`;
}

function cargaInicial() {
  if (productosCargadosAdmin.length > 0) {
    productosCargadosAdmin.map((productoAdmin) => crearCardProducto(productoAdmin));
  }
}

// logica extra

botonAgregarProductoAdmin.addEventListener("click", mostrarModal);

formularioAgregarProductoAdmin.addEventListener("submit", crearProducto);

cargaInicial();
