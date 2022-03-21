/**
 * t-upla que define los atributos basicos de luchador.
 *
 */
export type Attributes = {
  total: number;
  HP: number;
  ataque: number;
  defensa: number;
  velocidad: number;
  velocidadAtq: number;
  velocidadDefensa: number;
}


export class Fighter {
  constructor(private readonly nombre: string, private readonly peso:number, private readonly altura: number, private readonly estadistica: Attributes, private readonly frase: string) {

  }
}
