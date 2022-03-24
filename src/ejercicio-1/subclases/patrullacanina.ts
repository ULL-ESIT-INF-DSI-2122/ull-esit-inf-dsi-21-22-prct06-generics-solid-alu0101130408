import {Fighter, fighterAttributes} from "../fighter";

/**
 * Sub Clase Patrulla Canina que hereda de la super Clase "Fighter" y define los atributos y el universo de un luchador de la Patrulla Canina
 * @param nombre Nombre del personaje de Patrulla Canina
 * @param peso peso del personaje de Patrulla Canina
 * @param altura altura del personaje de Patrulla Canina
 * @param estadisticaLuchador Estadisticas del personaje de Patrulla Canina que son: vida, ataque, defensa y velocidad.
 * @param superpoder Superpoder que posee un heroe de Patrulla Canina
 * @param universo Universo al que pertenece el luchador.
 */
export class PatrullaCanina extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo:string, estadisticaLuchador: fighterAttributes, private readonly raza: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.raza = raza;
  }
  /**
   * Funcion que devuelve ela raza de un integrante de la patrulla canina.
   * @returns la raza de un integrante de la patrulla canina.
   */
  getRaza() {
    return this.raza;
  }
}
