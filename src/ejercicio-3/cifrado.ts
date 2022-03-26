import {Cypher} from "./cifradoCesar";
/**
 * Clase encargada de cifrar un mensaje que se le pasa.
 * @param alfabeto Alfabeto en un string con las posiciones especificas en las que se codificara.
 * @param mensaje mensaje que se desea cifrar usando una clave.
 * @param clave Clave con la que se va a cifrar el mensaje.
 */
export class Cifrado extends Cypher {
  constructor(protected alfabeto: string, protected mensaje: string, protected clave:string ) {
    super(alfabeto, mensaje, clave);
    this.mensaje = this.mensaje.replace(/ /g, '').toLowerCase();
    this.clave = this.clave.replace(/ /g, '').toLowerCase();
  }
  /**
   * Funcion que cifra el mensaje que se le pasa con la clave utilizando el algortimos de Vigenere.
   * @returns devuelve el mensaje  de tipo string cifrado tras el calculo aritmetico de las posiciones en modulo.
   */
  public cifrar(): string {
    let mensajeCifrado: string = '';
    let modulo: number = 0;
    let resultado: string = '';
    const suma: number[] = [];
    for (let i: number = 0; i < this.sizeMensaje(); i++) {
      modulo = (this.alfabeto.search(this.mensaje[i]) + this.alfabeto.search(this.clave[i]) + 1) % this.sizeAlphabet();
      suma.push(modulo);
    }

    for (let i:number = 0; i < suma.length; i++) {
      mensajeCifrado = mensajeCifrado + this.alfabeto.charAt(suma[i]);
    }
    resultado = this.setCypherMessage(mensajeCifrado);
    return resultado;
  }
}

