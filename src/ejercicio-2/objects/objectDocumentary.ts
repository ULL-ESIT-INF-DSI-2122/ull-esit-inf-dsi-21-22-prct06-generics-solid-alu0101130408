/**
 * Objeto documental que especifica los parametros necesarios para registrar una documental dentro de nuestra coleccion.
 * @param titulo Nombre que tiene el documental.
 * @param director Director encargado de la realización del Documental.
 * @param anio Año en el que fue lanzado el Documental.
 * @param duracion Duracion en Minutos del Documental.
 * @param pais Pais encargado del Documental.
 * @param fotografia Nombre de la persona encargada de realizar las fotografias del Documental.
 * @param distribuidora Nombre de la empresa que distribuye el Documental.
 */
export type documental = {
  titulo: string;
  director: string;
  anio: number;
  duracion: number;
  pais: string;
  fotografia: string;
  distribuidora: string;
}
