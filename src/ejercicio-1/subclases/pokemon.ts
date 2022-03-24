import {Fighter, fighterAttributes} from "../fighter";
/**
 * Sub Clase Pokemon que hereda de la super Clase "Fighter" y define los atributos y el universo de un luchador de Pokemon.
 * @param nombre Nombre del pokemon.
 * @param peso peso del pokemon.
 * @param altura altura del pokemon.
 * @param estadisticaLuchador Estadisticas del pokemon que son: vida, ataque, defensa y velocidad.
 * @param universo Universo al que pertenece el luchador, inicializado a pokemon.
 */
export class Pokemon extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo: string, estadisticaLuchador: fighterAttributes, private readonly tipo: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.tipo = tipo;
  }

  /**
   * Funcion publica que devuelve el tipo de pokemon.
   * @returns devuelve el tipo del pokemon
   */
  getTipo() {
    return this.tipo;
  }
}
