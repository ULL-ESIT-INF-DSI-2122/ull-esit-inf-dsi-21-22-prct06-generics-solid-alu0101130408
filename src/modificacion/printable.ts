/**
 * Interfaz generica Pintable que permite visualizar
 * @method print metodo que visualiza el objeto
*/

export interface Printable <T> {
  print(): T[];
}
