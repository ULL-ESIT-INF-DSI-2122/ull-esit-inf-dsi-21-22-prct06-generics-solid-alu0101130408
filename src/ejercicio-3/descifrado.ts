import {Cypher} from "./cifradoCesar";
/**
 * Clase encargada de Descifrar un mensaje que se le pasa
 * @param alfabeto Alfabeto en un string con las posiciones especificas en las que se descodificara.
 * @param mensaje mensaje que se desea descifrar usando la clave.
 * @param clave Clave con la que se ha cifrado el mensaje y necesario para descifrar.
 */
export class Descifrado extends Cypher {
  constructor(protected alfabeto: string, protected mensaje: string, protected clave:string ) {
    super(alfabeto, mensaje, clave);
    this.mensaje = this.mensaje.replace(/ /g, '').toLowerCase();
    this.clave = this.clave.replace(/ /g, '').toLowerCase();
  }

  /**
   * Funcion encargada de descifrar un mensaje que se le pasa junto al alfabeto y a la clave.
   * @returns devuelve el mensaje descifrado con la clave y el alfabeto.
   */
  public descifrar(): string {
    let mensajeDescifrado: string = '';
    let modulo: number = 0;
    let resultado: string = '';
    const resta: number[] = [];
    for (let i: number = 0; i < this.sizeMensaje(); i++) {
      modulo = (this.alfabeto.search(this.mensaje[i]) - this.alfabeto.search(this.clave[i]) - 1);
      if (modulo >= 0) {
        modulo = modulo % this.sizeAlphabet();
        resta.push(modulo);
      } else {
        modulo = modulo + this.sizeAlphabet();
        resta.push(modulo);
      }
    }

    for (let i:number = 0; i < resta.length; i++) {
      mensajeDescifrado = mensajeDescifrado + this.alfabeto.charAt(resta[i]);
    }
    resultado = this.setCypherMessage(mensajeDescifrado);
    return resultado;
  }
}
