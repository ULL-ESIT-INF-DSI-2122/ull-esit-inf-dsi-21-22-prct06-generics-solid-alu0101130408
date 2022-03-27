/**
 * Clase abstracta que define la forma de un programa que cifra o descrifra.
 */
export abstract class Cypher {
  constructor(protected alfabeto:string, protected mensaje: string, protected clave:string) {
    this.alfabeto = alfabeto;
    this.mensaje = mensaje;
    this.clave = clave;
  }
  /**
   * Funcion que devuelve el alfabeto.
   * @returns el alfabeto.
   */
  public getAlfabeto(): string {
    return this.alfabeto;
  }

  /**
   * Funcion que devuelve la clave.
   * @returns el valor de la clave.
   */
  public getClave(): string {
    return this.clave;
  }

  /**
   * Funcion que devuelve el mensaje.
   * @returns el valor del mensaje.
   */
  public getMensaje(): string {
    return this.mensaje;
  }

  /**
   * Funcion que devuelve la longitud del alfabeto.
   * @returns la longitud numerica del alfabeto
   */
  public sizeAlphabet(): number {
    return this.alfabeto.length;
  }

  /**
   * Funcion que devuelve la longitud de la clave.
   * @returns la longitud numerica de la clave.
   */
  public sizeClave(): number {
    return this.clave.length;
  }

  /**
   * Funcion que devuelve la longitud del mensaje.
   * @returns la longitud numerica del mensaje.
   */
  public sizeMensaje(): number {
    return this.mensaje.length;
  }
  /**
   * Funcion que establece y envia el mensaje cifrado
   * @param nuevoMensaje Nuevo mensaje que se va a establecer como valor cifrado.
   * @returns devuelve el mensaje cifrado que recibe por parametro.
   */
  public setCypherMessage(nuevoMensaje: string):string {
    return this.mensaje = nuevoMensaje;
  }
}
