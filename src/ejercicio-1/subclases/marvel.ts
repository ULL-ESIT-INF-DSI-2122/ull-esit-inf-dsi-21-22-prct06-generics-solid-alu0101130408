import {Fighter, fighterAttributes} from "../fighter";

/**
 * Sub Clase Marvel que hereda de la super Clase "Fighter" y define los atributos y el universo de un luchador de Marvel.
 * @param nombre Nombre del personaje de Marvel.
 * @param peso peso del personaje de Marvel.
 * @param altura altura del personaje de Marvel.
 * @param estadisticaLuchador Estadisticas del personaje de Marvel que son: vida, ataque, defensa y velocidad.
 * @param superPoder Parametro que define el poder que tiene un superheroe de Marvel.
 * @param universo Universo al que pertenece el luchador.
 */
export class Marvel extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo:string, estadisticaLuchador: fighterAttributes, private readonly superPoder: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.superPoder = superPoder;
  }
  /**
   * Funcion que devuelve el superpoder de un superheroe de Marvel.
   * @returns el superpoder de un superHeroe de Marvel.
   */
  getPoder() {
    return this.superPoder;
  }
}
