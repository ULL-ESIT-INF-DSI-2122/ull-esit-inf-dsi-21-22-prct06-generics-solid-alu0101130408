import {Fighter, fighterAttributes} from "./fighter";

/**
 * Sub Clase Marvel que hereda de la super Clase "Fighter" y define los atributos y el universo de un luchador de Marvel.
 * @param nombre Nombre del personaje de Marvel.
 * @param peso peso del personaje de Marvel.
 * @param altura altura del personaje de Marvel.
 * @param estadisticaLuchador Estadisticas del personaje de Marvel que son: vida, ataque, defensa y velocidad.
 * @param universo Universo al que pertenece el luchador, inicializado a Marvel.
 */
export class Marvel extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, estadisticaLuchador: fighterAttributes, private readonly universo: string = 'Marvel') {
    super(nombre, peso, altura, frase, estadisticaLuchador);
  }
  /**
   * Funcion que analiza el universo de un luchador.
   * @returns devuelve el universo perteneciente del luchador.
   */
  getUniverso() {
    return this.universo;
  }
}
