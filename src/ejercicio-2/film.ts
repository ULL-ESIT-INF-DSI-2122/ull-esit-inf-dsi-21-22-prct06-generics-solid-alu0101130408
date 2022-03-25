import {BasicStreameableCollection} from "./basiStremeableCollection";

export type pelicula = {
  titulo: string;
  director: string;
  anio: number;
  duracion: number;
  genero: string;
}

export class Film extends BasicStreameableCollection <pelicula> {
  constructor(protected collection: pelicula[]) {
    super(collection);
  }

  getCollectionItem(): pelicula[] {
    return this.collection;
  }

  search(parametro: string, valor: string): pelicula[] {
    let busqueda: pelicula[] = [];
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
      case 'duracion':
        busqueda = this.getCollectionItem().filter((item) => (item.duracion.toString() == valor));
        return busqueda;
        break;
      case 'genero':
        busqueda = this.getCollectionItem().filter((item) => (item.genero == valor));
        return busqueda;
        break;
      default:
        return [];
        break;
    }
  }
}
