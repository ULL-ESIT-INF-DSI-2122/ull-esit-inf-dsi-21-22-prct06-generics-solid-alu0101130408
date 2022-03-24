import {Fighter, fighterAttributes} from "../fighter";

/**
 * Sub Clase Stars Wars que hereda de la super Clase "Fighter" y define los atributos y el universo de un luchador de Star Wars
 * @param nombre Nombre del personaje de Star Wars.
 * @param peso peso del personaje de Star wars.
 * @param altura altura del personaje de Star Wars.
 * @param estadisticaLuchador Estadisticas del personaje de Star Wars que son: vida, ataque, defensa y velocidad.
 * @param superpoder Superpoder que posee un heroe de Star Wars
 * @param universo Universo al que pertenece el luchador.
 */
export class StarWars extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo:string, estadisticaLuchador: fighterAttributes, private readonly fuerza: string, private readonly sable: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.fuerza = fuerza;
    this.sable = sable;
  }
  /**
   * Funcion que devuelve el lado de la fuerza al que pertenece el personaje
   * @returns el lado de la fuerza al que pertenece el personaje (lado oscuro o luminoso)
   */
  getFuerza() {
    return this.fuerza;
  }
  /**
   * Funcion que devuelve el tipo de sable que posee el personaje.
   * @returns el tipo de sable que posee el personaje (verde, azul u rojo).
   */
  getSable() {
    return this.sable;
  }
}
