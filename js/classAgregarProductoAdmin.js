export default class Producto {
  #nombre;
  #id;
  #cod;
  #categoria;
  #presentacion;
  #stock;
  #descripcion;
  #precio;
  #image; 

  constructor(nombre,id= crypto.randomUUID(), cod=1,categoria,presentacion, stock, descripcion, precio, image) {
    this.#nombre = nombre;
    this.#id = id;
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
  get id() {
    return this.#id;
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
  set id(newid) {
    this.#id = newid;
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
    id: this.id,
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
