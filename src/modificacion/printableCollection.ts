import {Collectable} from "./collectable";
import {Printable} from "./printable";
/**
 * Clase que implementa un array de items de tipo COllectable y printable
 * @param items Arrayde elementos de tipos
 */
export abstract class PrintableCollection <T> implements Collectable<T>, Printable<T> {
  constructor(protected items: T[]) {}

  /**
   * Funcion que añade un elemento
   * @param item elemento que se desea añadir
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Funcion que devuelve un elmento del array
   * @param indice indice del elemento a devolver
   * @returns devuelve un elemento de tipo generico
   */
  getItem(indice: number): T {
    return this.items[indice];
  }

  /**
   * Funcion que elimina el elemento de una posicion
   * @param indice posicion del elemento a eliminar
   */
  removeItem(indice: number): void {
    this.items.splice(indice, 1);
  }

  /**
   * Funicion que devuelve la longitud del array
   * @returns devuelve el numero de elementos
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  abstract print(): T[];
}

