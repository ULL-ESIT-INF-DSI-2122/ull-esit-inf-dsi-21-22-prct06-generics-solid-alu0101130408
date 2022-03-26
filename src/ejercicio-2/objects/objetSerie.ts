/**
 * Objeto serie que especifica los parametros necesarios para registrar una serie
 * @param titulo Nombre que tiene la Serie.
 * @param anio Año en el que fue lanzada la serie.
 * @param temporada Numero de temporadas que tiene la Serie.
 * @param episodios Episodios con el que cuenta en total la Serie.
 * @param genero Genero en el que se encuentra catalogada la Serie.
 */
export type series = {
  titulo: string;
  anio: number;
  temporada: number;
  episodios: number;
  genero: string;
}
