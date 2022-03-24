import {Fighter, fighterAttributes} from "../fighter";

/**
 * Sub Clase DC que hereda de la super Clase "Fighter" y define los atributos y el universo de un luchador de DC Comics.
 * @param nombre Nombre del personaje de DC comincs.
 * @param peso peso del personaje de DC comincs.
 * @param altura altura del personaje de DC comincs.
 * @param estadisticaLuchador Estadisticas del personaje de DC comincs que son: vida, ataque, defensa y velocidad.
 * @param superpoder Superpoder que posee un heroe de DC comics
 * @param universo Universo al que pertenece el luchador.
 */
export class DC extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo:string, estadisticaLuchador: fighterAttributes, private readonly superPoder: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.superPoder = superPoder;
  }
  /**
   * Funcion que devuelve el superpoder de un superheroe de DC Comics.
   * @returns el superpoder de un superHeroe de DC comics.
   */
  getPoder() {
    return this.superPoder;
  }
}
