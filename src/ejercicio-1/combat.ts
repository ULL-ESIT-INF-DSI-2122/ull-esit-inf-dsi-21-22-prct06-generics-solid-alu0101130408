import {Fighter} from "./fighter";

/**
 * Clase encargada de simular un combate entre dos luchadores
 */

export class Combat {
  constructor(private luchador: Fighter, private secondLuchador:Fighter) {
    this.luchador = luchador;
    this.secondLuchador = secondLuchador;
  }

  /**
   * Funcion que calcula el daño inflingido por el atacante
   * @param atacante luchador que empieza el turno atacando
   * @returns devuelve el daño numerico que ha sido ocacionado a traves de la formula.
   */
  public calculoDañoInflingido(atacante: number): number {
    let daño: number = 0;
    let efectividad: number = this.calculoEfectividad(this.luchador, this.secondLuchador);

    if (atacante == 1) {
      daño = (50 * (this.luchador.getAtributos().ataque / this.secondLuchador.getAtributos().defensa) * efectividad);
      return Math.trunc(daño);
    } else {
      if (efectividad == 0.5) {
        efectividad = 2;
      }
      if (efectividad == 2) {
        efectividad = 0.5;
      }
      daño = (50 * (this.luchador.getAtributos().ataque / this.secondLuchador.getAtributos().defensa) * efectividad);
      return Math.trunc(daño);
    }
  }

  /**
   * Funcion que determina quien empieza si el luchar1 o el luchar 2.
   */
  public whoStart(): number {
    let atacante:number = 0;
    if (this.luchador.getAtributos().velocidad >= this.secondLuchador.getAtributos().velocidad) {
      atacante = 1;
    } else {
      if (this.luchador.getAtributos().velocidad < this.secondLuchador.getAtributos().velocidad) {
        atacante = 2;
      }
    }
    return atacante;
  }
  /**
   * Función que calcula el ganador del combate entre ambos luchadores
   * @return Devuelve una cadena con el nombre del luchador que ha ganado dependiendo de la vida resultante.
   */
  public combateLuchadores(): string {
    let atacante: number = this.whoStart();
    let winner: string = '';
    console.log(`──────────────────────────────────────────────────────────────────`);
    console.log(`» ${this.luchador.getNombre()}  vs   ${this.secondLuchador.getNombre()}`);
    console.log(`» Vida: ${this.luchador.getAtributos().vida}      » Vida: ${this.secondLuchador.getAtributos().vida}`);
    console.log(`» Ataque: ${this.luchador.getAtributos().ataque}    » Ataque: ${this.secondLuchador.getAtributos().ataque}`);
    console.log(`» Defensa: ${this.luchador.getAtributos().defensa}   » Defensa: ${this.secondLuchador.getAtributos().defensa}`);
    console.log(`» Velocidad: ${this.luchador.getAtributos().velocidad} » Velocidad: ${this.secondLuchador.getAtributos().velocidad}`);
    console.log(`──────────────────────────────────────────────────────────────────`);

    while ((this.luchador.getAtributos().vida > 0) && (this.secondLuchador.getAtributos().vida > 0)) {
      if (atacante == 1) {
        console.log(`»» Turno de ataque de ${this.luchador.getNombre()}`);
        console.log(`${this.luchador.getFraseCaracteristica()}!`);
        this.secondLuchador.setVida(this.secondLuchador.getAtributos().vida - this.calculoDañoInflingido(atacante));
        console.log(`»» La vida de ${this.secondLuchador.getNombre()} ha bajado a: ${this.secondLuchador.getAtributos().vida}\n`);
        atacante = 2;
      } else {
        console.log(`»» Turno de ataque de ${this.secondLuchador.getNombre()}`);
        console.log(`${this.secondLuchador.getFraseCaracteristica()}!`);
        this.luchador.setVida(this.luchador.getAtributos().vida - this.calculoDañoInflingido(atacante));
        console.log(`»» La vida de ${this.luchador.getNombre()} ha bajado a: ${this.luchador.getAtributos().vida}\n`);
        atacante = 1;
      }
    }

    winner = this.whoWinner();
    return winner;
  }

  /**
   * Funcion que determina al ganador en base a la vida de ambos luchadores
   * @returns devuelve si la vida es menor o igual a cero un mensaje de que no se puede realizar el combate sino devuelve el nombre del ganador.
   */
  public whoWinner(): string {
    if (this.luchador.getAtributos().vida <= 0) {
      console.log(`»»»» El ganador del combate es: ${this.secondLuchador.getNombre()} «««« `);
      return this.secondLuchador.getNombre();
    } else {
      console.log(`»»»» El ganador del combate es: ${this.luchador.getNombre()} ««««`);
      return this.luchador.getNombre();
    }
  }

  /**
   * Funcion que calcula la efectividad de los ataques dependiendo del universo al que pertenezca cada luchador
   * @param luchador Primer luchador del combate perteneciente a uno de las subclases de luchador.
   * @param secondLuchador segundo luchador del combate perteneciente a uno de las subclases de luchador.
   * @returns devuelve la efectividad que hay que aplicar al ataque.
   */
  public calculoEfectividad(luchador: Fighter, secondLuchador: Fighter): number {
    let efectividad: number = 0;

    switch (luchador.getUniverso()) {
      case 'Pokemon':
        if (secondLuchador.getUniverso() == 'Pokemon') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Marvel') {
          efectividad = 1;
        }
        if (secondLuchador.getUniverso() == 'DC') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Star Wars') {
          efectividad = 2;
        }
        if (secondLuchador.getUniverso() == 'Patrulla Canina') {
          efectividad = 2;
        }
        break;

      case 'Marvel':
        if (secondLuchador.getUniverso() == 'Marvel') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Pokemon') {
          efectividad = 1;
        }
        if (secondLuchador.getUniverso() == 'DC') {
          efectividad = 2;
        }
        if (secondLuchador.getUniverso() == 'Star Wars') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Patrulla Canina') {
          efectividad = 0.5;
        }
        break;

      case 'DC':
        if (secondLuchador.getUniverso() == 'DC') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Pokemon') {
          efectividad = 2;
        }
        if (secondLuchador.getUniverso() == 'Marvel') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Star Wars') {
          efectividad = 1;
        }
        if (secondLuchador.getUniverso() == 'Patrulla Canina') {
          efectividad = 0.5;
        }
        break;
      case 'Star Wars':
        if (secondLuchador.getUniverso() == 'Star Wars') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Pokemon') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'DC') {
          efectividad = 1;
        }
        if (secondLuchador.getUniverso() == ' Marvel') {
          efectividad = 2;
        }
        if (secondLuchador.getUniverso() == 'Patrulla Canina') {
          efectividad = 2;
        }
        break;

      case 'Patrulla Canina':
        if (secondLuchador.getUniverso() == 'Patrulla Canina') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Pokemon') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'DC') {
          efectividad = 2;
        }
        if (secondLuchador.getUniverso() == 'Star Wars') {
          efectividad = 0.5;
        }
        if (secondLuchador.getUniverso() == 'Marvel') {
          efectividad = 2;
        }
        break;

      default:
        efectividad = -1;
        break;
    }

    return efectividad;
  }
}
