import {Fighter} from "./fighter";
/**
 * Clase encargada de almacenar y mostrar por pantalla diferentes luchadores.
 * @param BDDLuchadores un vector que almacena la base de datos de los luchadores.
 */

export class RegistroLuchadores {
  constructor(private BDDLuchadores: Fighter[]) {
    this.BDDLuchadores = BDDLuchadores;
  }
  /**
   * Metodo que devuelve el atributo privado de los luchadores.
   * @returns devuelve el atributo privado de los luchadores.
   */
  public getRegistro() {
    return this.BDDLuchadores;
  }

  /**
   * Funcion que establece un nuevo luchador
   * @param Luchador  Funcion que añade un nuevo luchador a la base
   */
  public setLuchador(Luchador: Fighter) {
    this.BDDLuchadores.push(Luchador);
  }
  /**
   * Funcion que muestra por pantalla la base de datos
   * @returns Devuelve el nombre de los luchadores que componen la base de datos.
   */
  public printBDD() {
    let cadena: string = '';
    for (let i: number = 0; i < this.BDDLuchadores.length; i++) {
      console.log(`Nombre: ${this.BDDLuchadores[i].getNombre()}`);
      cadena = cadena + this.BDDLuchadores[i].getNombre() + ', ';
    }
    cadena = cadena.substring(0, cadena.length - 2);
    return cadena;
  }
}
