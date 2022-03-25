import {Stremeable} from "./stremeable";

export abstract class BasicStreameableCollection <T> implements Stremeable<T> {
  constructor(protected collection: T[]) {}

  abstract search(parametro: string, valor: string): T[];
  abstract getCollectionItem(): T[];

  public addItem(newItem: T): void {
    this.collection.push(newItem);
  }

  getNumberOfItems(): number {
    return this.collection.length;
  }
}
