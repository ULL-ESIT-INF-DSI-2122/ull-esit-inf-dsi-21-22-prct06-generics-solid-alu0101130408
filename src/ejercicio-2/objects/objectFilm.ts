/**
 * Objeto pelicula que define los parametros necesarios para registrar una pelicula en su correspondiente coleccion.
 * @param titulo Nombre que tiene la pelicula.
 * @param director Director encargado de la realización de la pelicula.
 * @param anio Año en el que fue lanzada la pelicula.
 * @param duracion Duracion en minutos de la pelicula.
 * @param genero Genero en el se cataloga la pelicula.
 */
export type pelicula = {
  titulo: string;
  director: string;
  anio: number;
  duracion: number;
  genero: string;
}
