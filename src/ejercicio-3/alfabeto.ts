/**
 * Clase que implementa el alfabeto que se utilizara para cifrar
 * @param alfabeto Cadena de Strings que define las letras que se utlizaran en el alfabeto.
 * @method getAlphabet obtiene el string que define al alfabeto.
 * @method setAlphabet establece un alfabeto al que se le pasa.
 */
export class Alphabet {
  constructor(private alfabeto: string) {
    this.alfabeto = alfabeto;
  }
  /**
   * Funcion que devuelve el alfabeto actual.
   * @returns devuelve el alfabeto actual que compone el string.
   */
  public getAlphabet() {
    return this.alfabeto;
  }

  public sizeAlphabet() {
    return this.alfabeto.length;
  }
  /**
   * Funcion que establece como alfabeto el que se le pasa.
   * @param alphabet alfabeto que se le pasa al alfabeto original y se sobreescribe.
   */
  public setAlphabet(alphabet: string) {
    this.alfabeto = alphabet;
  }
}
