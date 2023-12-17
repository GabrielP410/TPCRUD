class Producto {
    #nombre;
    #cod;
    #stock;
    #descripcion;
    #precio;
    #image; // New property for the product image
  
    constructor(nombre, cod, stock, descripcion, precio, image) {
      this.#nombre = nombre;
      this.#cod = cod;
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
  
    getStock() {
      return this.#stock;
    }
  
    getDescripcion() {
      return this.#descripcion;
    }
  
    getPrecio() {
      return this.#precio;
    }
  
    getImage() { // Getter for the product image
      return this.#image;
    }
  
    // Setter methods
    setNombre(newNombre) {
      this.#nombre = newNombre;
    }
  
    setCod(newCod) {
      this.#cod = newCod;
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
  
    setImage(newImage) { // Setter for the product image
      this.#image = newImage;
    }
  }
  
  // Example usage:
  const producto1 = new Producto(
    "Product 1",
    1,
    10,
    "Description of Product 1",
    29.99,
    "product1.jpg" // Example image file name
  );
  
  // Accessing private properties and image using getters
  console.log(producto1.getNombre()); // Output: Product 1
  console.log(producto1.getCod());     // Output: 1
  console.log(producto1.getStock());   // Output: 10
  console.log(producto1.getDescripcion());  // Output: Description of Product 1
  console.log(producto1.getPrecio());      // Output: 29.99
  console.log(producto1.getImage());        // Output: product1.jpg
  
  // Modifying private properties and image using setters
  producto1.setNombre("Updated Product 1");
  producto1.setCod(2);
  producto1.setStock(15);
  producto1.setDescripcion("Updated description");
  producto1.setPrecio(39.99);
  producto1.setImage("updated_product1.jpg");
  console.log(producto1.getNombre()); // Output: Updated Product 1
  console.log(producto1.getCod());     // Output: 2
  console.log(producto1.getStock());   // Output: 15
  console.log(producto1.getDescripcion());  // Output: Updated description
  console.log(producto1.getPrecio());      // Output: 39.99
  console.log(producto1.getImage());        // Output: updated_product1.jp