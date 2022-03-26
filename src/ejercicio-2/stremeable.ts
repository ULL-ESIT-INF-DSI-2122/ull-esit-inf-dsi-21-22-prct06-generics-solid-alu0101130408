/**
 * Interfaz Stremeable que especifica las propiedad y metodos de una coleccion de emisiones
 * @method addItem Metodo encargado de añadir un nuevo elemento a una coleccion.
 * @method getCollectionItem Metodo encargado de obtener un elemento de la coleccion.
 * @method getNumberOfItems Metodo encargado de obtener el numero de objetos que posee la coleccion.
 */
export interface Stremeable <T> {
  addItem(newItem: T): void;
  getCollectionItem(): T[]
  getNumberOfItems(): number;
}
