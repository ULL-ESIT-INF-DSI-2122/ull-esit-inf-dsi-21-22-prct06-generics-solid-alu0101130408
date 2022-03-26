import {BasicStreameableCollection} from "../basiStremeableCollection";
import {documental} from "../objects/objectDocumentary";

/**
 * Clase encargada de representar una coleccion de documentales.
 * @param collection coleccion de documentales.
 */
export class Documentary extends BasicStreameableCollection <documental> {
  constructor(protected collection: documental[]) {
    super(collection);
  }
  /**
   * Funcion encargada de obtener la coleccion de Documentales.
   * @returns la coleccion de documentales almacenados.
   */
  getCollectionItem(): documental[] {
    return this.collection;
  }

  /**
   * Funcion encargada de buscar a través del parametro de búsqueda, un valor dado en la coleccion de Documentales.
   * @param parametro Parametro que se desea filtrar, si es por titulo, año, director ...
   * @param valor Valor que se quiere buscar en la coleccion, si el titulo es 'lo que el pulpo me enseño'...
   * @returns devuelve un array con toda la informacion referente a esa busqueda.
   */
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
      case 'duracion':
        busqueda = this.getCollectionItem().filter((item) => (item.duracion.toString() == valor));
        return busqueda;
        break;
      case 'fotografia':
        busqueda = this.getCollectionItem().filter((item) => (item.fotografia == valor));
        return busqueda;
        break;
      case 'distribuidora':
        busqueda = this.getCollectionItem().filter((item) => (item.distribuidora == valor));
        return busqueda;
        break;
      default:
        return [];
        break;
    }
  }
}
