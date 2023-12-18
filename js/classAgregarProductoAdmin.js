export default class Producto {
  #nombre;
  #cod;
  #categoria;
  #presentacion;
  #stock;
  #descripcion;
  #precio;
  #image; 

  constructor(nombre, cod=1,categoria,presentacion, stock, descripcion, precio, image) {
    this.#nombre = nombre;
    this.#cod = cod;
    this.#categoria = categoria;
    this.#presentacion = presentacion;
    this.#stock = stock;
    this.#descripcion = descripcion;
    this.#precio = precio;
    this.#image = image;
  }

  // Getter methods
  getNombre() {
    return this.#nombre;
  }

  getCod() {
    return this.#cod;
  }

  getcategoria (){
    return this.#categoria;
  }
  getpresentacion() {
    return this.#presentacion;
  }

  getStock() {
    return this.#stock;
  }

  getDescripcion() {
    return this.#descripcion;
  }

  getPrecio() {
    return this.#precio;
  }

  getImage() { 
    return this.#image;
  }

  // Setter 
  setNombre(newNombre) {
    this.#nombre = newNombre;
  }

  setCod(newCod) {
    this.#cod = newCod;
  }


  setCategoria(newcategoria) {
    this.#categoria = newcategoria;
  }



  setpresentacion(newpresentacion) {
    this.#presentacion = newpresentacion;
  }


  setStock(newStock) {
    this.#stock = newStock;
  }

  setDescripcion(newDescripcion) {
    this.#descripcion = newDescripcion;
  }

  setPrecio(newPrecio) {
    this.#precio = newPrecio;
  }

  setImage(newImage) { 
    this.#image = newImage;
  }
}

// // Example usage:
// const producto1 = new Producto(
//   "Product 1",
//   1,
//   10,
//   "Description of Product 1",
//   29.99,
//   "product1.jpg" // Example image file name
// );

// // Accessing private properties and image using getters
// console.log(producto1.getNombre()); // Output: Product 1
// console.log(producto1.getCod());     // Output: 1
// console.log(producto1.getStock());   // Output: 10
// console.log(producto1.getDescripcion());  // Output: Description of Product 1
// console.log(producto1.getPrecio());      // Output: 29.99
// console.log(producto1.getImage());        // Output: product1.jpg

// // Modifying private properties and image using setters
// producto1.setNombre("Updated Product 1");
// producto1.setCod(2);
// producto1.setStock(15);
// producto1.setDescripcion("Updated description");
// producto1.setPrecio(39.99);
// producto1.setImage("updated_product1.jpg");
// console.log(producto1.getNombre()); // Output: Updated Product 1
// console.log(producto1.getCod());     // Output: 2
// console.log(producto1.getStock());   // Output: 15
// console.log(producto1.getDescripcion());  // Output: Updated description
// console.log(producto1.getPrecio());      // Output: 39.99
// console.log(producto1.getImage());        // Output: updated_product1.jpg