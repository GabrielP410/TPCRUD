const leerFormNavBar = (e) =>{
    e.preventDefault();
    console.log('esto sale desde la funcion leerFormNavBar')

    const txBuscado = document.querySelector('.form-control').value
    console.log(txBuscado)
    // resetear el formulario
    buscadorNavBar.reset()

}

const buscadorNavBar = document.querySelector('form');
console.log(buscadorNavBar);

buscadorNavBar.addEventListener('submit', leerFormNavBar)

