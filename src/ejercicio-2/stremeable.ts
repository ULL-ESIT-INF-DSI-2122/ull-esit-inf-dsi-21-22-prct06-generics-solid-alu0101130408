/**
 * Interfaz Stremeable que especifica las propiedad y metodos de una coleccion de emisiones
 */

export interface Stremeable <T> {
  addItem(newItem: T): void;
  getCollectionItem(): T[]
  getNumberOfItems(): number;
}
