/**
 * Clase encargada de implementar numeros primos a través del patron singleton
 * @param PrimeNumberInstance instancia de la clase propia privada para realizar el singleton
 */
export class PrimeNumber<T> implements Iterable<T> {
  private static PrimeNumberInstance: PrimeNumber<number[]>;
  /**
   * Contructor de la clase
   * @param arrayNumerico array numerico de valores donde se realizara la busqueda
   */
  private constructor(protected arrayNumerico: T[]) {
    this.arrayNumerico = arrayNumerico;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.arrayNumerico.values();
  }

  public static getPrimeNumberInstance(): PrimeNumber<number[]> {
    if (!PrimeNumber.PrimeNumberInstance) {
      PrimeNumber.PrimeNumberInstance = new PrimeNumber([]);
    }
    return PrimeNumber.PrimeNumberInstance;
  }

  public setValue(numero: number[]) {
    PrimeNumber.PrimeNumberInstance.arrayNumerico.push(numero);
  }

  public getNumberOfElement() {
    return PrimeNumber.PrimeNumberInstance.arrayNumerico.length;
  }

  public getItem(n:number): number | undefined {
    let match: number = 0;
    for (let i:number = 0; i < this.arrayNumerico.length; i++ ) {
      if ( i == n) {
        match = i;
      } else {
        return undefined;
      }
    }
    return match;
  }
  /**
   * Funcion que calcula si un numero es primo o no
   * @param numero numero a analizar si es primo
   * @returns devuelve true si es primo false si no lo es
   */
  public primo(numero: number): boolean {
    for (let i: number = 2; i < numero; i++) {
      if (numero % i == 0) {
        return false;
      }
    }
    return numero !== 1;
  }
  /**
   * Funcion que busca el numero de primos dado un n
   * @param n numero de parametros que se busca
   * @returns devuelve un array con los n primeros elementos
   */
  public primerosNPrimos(n: number) {
    const primosfind: number[] = [];
    const resultado: number[] = [];
    for (let j: number = 1; j <= PrimeNumber.PrimeNumberInstance.arrayNumerico.length; j++) {
      if (this.primo(j)) {
        primosfind.push(j);
      }
    }
    console.log(`primos: ${primosfind}`);
    for (let i: number = 1; i <= n; i++) {
      resultado.push(primosfind[i]);
    }
    return resultado;
  }
  /**
  * Funcion que calcula en un rango dado los numeros primos dentro del rango
  * @param n limite inferior
  * @param m limite superior
  * @returns devuelve los primso dentro del rango
  */
  public rangeNMPrimos(n: number, m: number) {
    const primosfind: number[] = [];
    for (let j: number = n; j <= m; j++) {
      if (this.primo(j)) {
        primosfind.push(j);
      }
    }
    return primosfind;
  }
}
