export default class Producto {
  #id;
  #nombre;
  #codigo;
  #precio;
  #categorias;

  constructor(nombre, codigo, precio, categorias = [], id = 1) {
    this.#id = id;
    this.#nombre = nombre;
    this.#codigo = codigo;
    this.#precio = precio;
    this.#categorias = categorias;
  }

  get id() {
    return this.#id;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  get precio() {
    return this.#precio;
  }

  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  get categorias() {
    return this.#categorias;
  }

  set categorias(nuevasCategorias) {
    this.#categorias = nuevasCategorias;
  }

  toJSON() {
    return {
      id: this.#id,
      nombre: this.#nombre,
      codigo: this.#codigo,
      precio: this.#precio,
      categorias: this.#categorias,
    };
  }
}
