class cardGrillaPrincipal {
    constructor(categoria, codigoProducto, precio, descripcion, imagenProducto){
    this.categoriaCardPrincipal = categoria;
    this.CodigoDeProductoCardPrincipal = codigoProducto;
    this.precioCardPrincipal = precio;
    this.descripcionCardPrincipal = descripcion;
    this.imagenCardPrincipal = imagenProducto
    this.disponibilidad = true;
}}
// propiedades computadas get y set
get precio1(){
    return this.precio
}
set precio1(nuevoPeecio){

    this.precio = nuevoPrecio
}

// metodos


// crear o instancias objeto nuevo
const prodicto1 = new cardGrillaPrincipal("secos", 15624257, 7600, "fruto seco y ya", 6272)
console.log(prodicto1)