import {BasicStreameableCollection} from "./basiStremeableCollection";

export type series= {
  titulo: string;
  anio: number;
  temporada: number;
  episodios: number;
  genero: string;
}

export class Serie extends BasicStreameableCollection <series> {
  constructor(protected collection: series[]) {
    super(collection);
  }

  getCollectionItem(): series[] {
    return this.collection;
  }

  search(parametro: string, valor: string): series[] {
    let busqueda: series[] = [];
    switch (parametro) {
      case 'titulo':
        busqueda = this.getCollectionItem().filter((item) => (item.titulo == valor));
        return busqueda;
        break;
      case 'anio':
        busqueda = this.getCollectionItem().filter((item) => (item.anio.toString() == valor));
        return busqueda;
        break;
      case 'temporada':
        busqueda = this.getCollectionItem().filter((item) => (item.temporada.toString() == valor));
        return busqueda;
        break;
      case 'episodios':
        busqueda = this.getCollectionItem().filter((item) => (item.episodios.toString() == valor));
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
