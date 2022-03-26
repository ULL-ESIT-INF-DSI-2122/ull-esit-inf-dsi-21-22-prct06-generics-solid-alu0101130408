import {BasicStreameableCollection} from "../basiStremeableCollection";
import {series} from '../objects/objetSerie';
/**
 * Clase que representa una coleccion de Series.
 * @param collection Array de Series que alamcena la coleccion de series.
 */
export class Serie extends BasicStreameableCollection <series> {
  constructor(protected collection: series[]) {
    super(collection);
  }

  /**
   * Funcion encargada de obtener la coleccion de Series.
   * @returns la coleccion de Series almacenadas.
   */
  getCollectionItem(): series[] {
    return this.collection;
  }

  /**
   * Funcion encargada de buscar a través del parametro de búsqueda, un valor dado en la coleccion de Series.
   * @param parametro Parametro que se desea filtrar, si es por titulo, año, genero ...
   * @param valor Valor que se quiere buscar en la coleccion, si el titulo es 'Lucifer'...
   * @returns devuelve un array con toda la informacion referente a esa busqueda.
   */
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
