import {BasicStreameableCollection} from "./basiStremeableCollection";

export type documental = {
  titulo: string;
  director: string;
  anio: number;
  duracion: number;
  pais: string;
  fotografia: string;
  distribuidora: string;
}

export class Documentary extends BasicStreameableCollection <documental> {
  constructor(protected collection: documental[]) {
    super(collection);
  }

  getCollectionItem(): documental[] {
    return this.collection;
  }

  search(parametro: string, valor: string): documental[] {
    let busqueda: documental[] = [];
    switch (parametro) {
      case 'titulo':
        busqueda = this.getCollectionItem().filter((item) => (item.titulo == valor));
        return busqueda;
        break;
      case 'director':
        busqueda = this.getCollectionItem().filter((item) => (item.director == valor));
        return busqueda;
        break;
      case 'anio':
        busqueda = this.getCollectionItem().filter((item) => (item.anio.toString() == valor));
        return busqueda;
        break;
      case 'pais':
        busqueda = this.getCollectionItem().filter((item) => (item.pais == valor));
        return busqueda;
        break;
      case 'fotografia':
        busqueda = this.getCollectionItem().filter((item) => (item.fotografia == valor));
        return busqueda;
        break;
      case 'productora':
        busqueda = this.getCollectionItem().filter((item) => (item.distribuidora == valor));
        return busqueda;
        break;
      default:
        return [];
        break;
    }
  }
}
