// constantes funcion desplegar
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
// constantes funcion desplegar

// constantes modal cargar producto

const imagen= document.getElementById('imagen_cargada_usuario')
const nombre= document.getElementById('nombre_prod_cargado')
const descripcion = document.getElementById('descripcion_del_prod_cargado')
// constantes modal cargar producto

// modal funcion desplegar
myModal.addEventListener('shown.bs.modal',() => {
  myInput.focus()
  
})

function toggle () {
  let blur = document.querySelector('blur');
  blur.classList.toggle('active');
}
// modal funcion desplegar

// cargar producto
function agregarnuevoproducto (e) {
  e.preventDefault();
 
}

myModal.addEventListener('submit',agregarnuevoproducto());
agregarnuevoproducto();

