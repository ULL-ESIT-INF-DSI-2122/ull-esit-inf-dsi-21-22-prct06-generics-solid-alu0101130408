import {BasicStreameableCollection} from "../basiStremeableCollection";
import {pelicula} from "../objects/objectFilm";
/**
 * Clase que representa una coleccion de Peliculas de tipo Streameable.
 * @param collection Array de Peliculas que alamcena la coleccion de peliculas.
 */
export class Film extends BasicStreameableCollection <pelicula> {
  constructor(protected collection: pelicula[]) {
    super(collection);
  }
  /**
   * Funcion encargada de obtener la coleccion de Peliculas.
   * @returns la coleccion de Peliculas almacenadas.
   */
  getCollectionItem(): pelicula[] {
    return this.collection;
  }

  /**
   * Funcion encargada de buscar a través del parametro de búsqueda, un valor dado en la coleccion de Peliculas.
   * @param parametro Parametro que se desea filtrar, si es por titulo, año, genero ...
   * @param valor Valor que se quiere buscar en la coleccion de peliculas, si el titulo es 'Avengers: Endgame'...
   * @returns devuelve un array con toda la informacion referente a esa busqueda.
   */
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
