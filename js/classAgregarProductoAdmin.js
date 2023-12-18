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
  get nombre() {
    return this.#nombre;
  }

  get cod() {
    return this.#cod;
  }

  get categoria (){
    return this.#categoria;
  }
  get presentacion() {
    return this.#presentacion;
  }

  get stock() {
    return this.#stock;
  }

  get descripcion() {
    return this.#descripcion;
  }

  get precio() {
    return this.#precio;
  }

  get image() { 
    return this.#image;
  }

  // Setter 
  set nombre(newNombre) {
    this.#nombre = newNombre;
  }

  set cod(newCod) {
    this.#cod = newCod;
  }


  set categoria(newcategoria) {
    this.#categoria = newcategoria;
  }



  set presentacion(newpresentacion) {
    this.#presentacion = newpresentacion;
  }


  set stock(newStock) {
    this.#stock = newStock;
  }

  set descripcion(newDescripcion) {
    this.#descripcion = newDescripcion;
  }

  set precio(newprecio) {
    this.#precio = newprecio;
  }

  set image(newImage) { 
    this.#image = newImage;
  }


// metodo para el stringyfy
toJSON(){

  return{

    nombre:  this.nombre,
    cod: this.cod,
    categoria: this.categoria,
    presentacion: this.presentacion,
    stock: this.stock,
    descripcion: this.descripcion,
    precio: this.precio,
    image: this.image,
   
  }
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
