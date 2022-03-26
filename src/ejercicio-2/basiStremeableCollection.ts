import {Stremeable} from "./stremeable";

/**
 * Clase abstracta BasicStreameableCollecion de tipo generica que implementa una interfaz Stremable.
 * @param collection Coleccion de elementos de cualquier tipo.
 * @method search Metodo abstracto encargado de realizar la busqueda a traves de un filtro dentro de la coleccion.
 * @method getCollectionItem Metodo abstracto encargado de obtener un item en concreto registrado en la coleccion.
 * @method addItem Implementa un metodo que permite añadir un nuevo elemento a la coleccion.
 * @method getNumberOfItems Implementa un metodo publico encargado de devolver el numero de elementos que conforman una coleccion.
 */
export abstract class BasicStreameableCollection <T> implements Stremeable<T> {
  constructor(protected collection: T[]) {}

  abstract search(parametro: string, valor: string): T[];
  abstract getCollectionItem(): T[];

  public addItem(newItem: T): void {
    this.collection.push(newItem);
  }

  public getNumberOfItems(): number {
    return this.collection.length;
  }
}
