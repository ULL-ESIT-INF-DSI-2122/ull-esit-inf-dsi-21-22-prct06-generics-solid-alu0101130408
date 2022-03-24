/**
 * Objeto que define los atributos de los luchadores.
 */
export type fighterAttributes = {
  vida: number,
  ataque: number,
  defensa: number,
  velocidad: number,
};

/**
 * Super Clase abstracta que define la forma de instancia de un Luchador, además de definir a traves de un objeto sus atributos
 * @param nombre Nombre del luchador.
 * @param peso peso del luchador.
 * @param altura altura del luchador.
 * @param frase frase tipica que diría el luchador al usar un ataque.
 * @param fighterAttributes Objeto que define las estadísticas que posee el luchador: vida, ataque, defensa y velocidad.
 */

export abstract class Fighter {
  constructor(private readonly nombre: string, private readonly peso:number, private readonly altura: number, private readonly frase: string, private estadisticaLuchador: fighterAttributes) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
  }

  /**
   * Metodo publico que devuelve el nombre del luchador
   * @returns devuelve el nombre del luchador.
   */
  public getNombre() {
    return this.nombre;
  }

  /**
   * Metodo publico que devuelve el peso del luchador.
   * @returns devuelve el peso del luchador.
   */
  public getPeso() {
    return this.peso;
  }

  /**
   * Metodo publico que devuelve la altura del luchador.
   * @returns devuelve la altura del luchador.
   */
  public getAltura() {
    return this.peso;
  }

  /**
   * Metodo publico que devuelve la frase caracteristica del luchador
   * @returns devuelve la frase caracteristica del luchador.
   */
  public getFraseCaracteristica() {
    return this.frase;
  }

  /**
   * Metodo publico que devuelve los atributos (estadisticas) del luchador.
   * @returns devuelve los atributos tanto la vida, el ataque, la defensa o la velocidad del luchador.
   */
  public getAtributos() {
    return this.estadisticaLuchador;
  }

  /**
   * Metodo publico que actualiza la vida al luchador.
   * @param vidaActual Vida nueva a actualizar del luchador.
   */
  public setVida(vidaActual: number) {
    this.estadisticaLuchador.vida = vidaActual;
  }
}
