/**
 * Interfaz generica Collectable que define las operaciones asociadas a un elemento
 * @method addItem Añade un item a la interfaz
 * @method getItemobtiene el item de la interfaz
 * @method removeItem elimina un item que se pasa
 * @method getNumberOfItems Obtiene el numero de elementos que contiene
 */

export interface Collectable<T> {
  addItem(item: T): void;
  getItem(indice: number): T;
  removeItem(indice: number): void;
  getNumberOfItems(): number;
}
