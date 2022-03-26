import 'mocha';
import {expect} from 'chai';
import {Serie} from '../src/ejercicio-2/subclass/serie';
import {Film} from '../src/ejercicio-2/subclass/film';
import {Documentary} from '../src/ejercicio-2/subclass/documentary';

const serieCollection = new Serie([
  {titulo: 'Stranger Things', anio: 2016, temporada: 4, episodios: 34, genero: 'suspense'},
  {titulo: 'Vikings', anio: 2013, temporada: 6, episodios: 89, genero: 'drama-Historico'},
  {titulo: 'The Punisher', anio: 2017, temporada: 2, episodios: 26, genero: 'accion'},
]);

serieCollection.addItem({titulo: 'Lucifer', anio: 2016, temporada: 6, episodios: 93, genero: 'fantasia-policia'});

const filmCollection = new Film([
  {titulo: 'White Chicks', director: 'Keenen Ivory Wayan', anio: 2004, duracion: 109, genero: 'comedia'},
  {titulo: 'Avengers: Endgame', director: 'Anthony & Joe Ruso', anio: 2019, duracion: 181, genero: 'ciencia-ficcion'},
  {titulo: 'El Gran Stan', director: 'Rob Schneider', anio: 2004, duracion: 109, genero: 'comedia'},
  {titulo: 'Creed ', director: 'Ryan Coogler', anio: 2015, duracion: 133, genero: 'deportes'},
  {titulo: 'The Ring', director: 'Gore Verbinski', anio: 2002, duracion: 116, genero: 'terror'},
]);

filmCollection.addItem({titulo: 'Nadie', director: 'Ilya Naishuller', anio: 2021, duracion: 92, genero: 'accion'});

const documentaryCollection = new Documentary([
  {titulo: 'Frente Antinuclear', director: 'Rebecca Cammisa', anio: 2017, duracion: 100, pais: 'Estados Unidos', fotografia: 'Claudia Raschke', distribuidora: 'HBO Documentary Films'},
  {titulo: 'Lo que el pulpo me enseño', director: 'Pippa Ehrlich,& James Reed', anio: 2020, duracion: 85, pais: 'Sudafrica', fotografia: 'Roger Horrocks', distribuidora: 'Netflix'},
  {titulo: 'The Beatles Anthology', director: 'Bob Smeaton', anio: 1995, duracion: 600, pais: 'Reino Unido', fotografia: 'Eugene O Connor', distribuidora: 'American Broadcasting Company (ABC)'},
  {titulo: 'The Salt of the Earth', director: 'Wim Wenders', anio: 2014, duracion: 100, pais: 'Francia', fotografia: 'Hugo Barbier', distribuidora: 'Amazonas Images'},
]);

documentaryCollection.addItem({titulo: 'Searching for a Sugar man', director: 'Malik Bendjelloul', anio: 2012, duracion: 87, pais: 'Suecia', fotografia: 'Camilla Skagerström', distribuidora: 'Sony Pictures Classics'});

describe('Pruebas Unitarias de la clase Serie', ()=>{
  it('Test de instancia de la clase Serie', ()=>{
    expect(serieCollection).to.exist;
    expect(serieCollection).not.null;
  });
  it('Test de metodos de la clase Serie', ()=>{
    expect(serieCollection.getNumberOfItems()).to.be.equal(4);
    expect(serieCollection.search('titulo', 'Vikings')).to.be.eql([{titulo: 'Vikings', anio: 2013, temporada: 6, episodios: 89, genero: 'drama-Historico'}]);
    expect(serieCollection.search('anio', '2016')).to.be.eql([{titulo: 'Stranger Things', anio: 2016, temporada: 4, episodios: 34, genero: 'suspense'}, {titulo: 'Lucifer', anio: 2016, temporada: 6, episodios: 93, genero: 'fantasia-policia'}]);
    expect(serieCollection.search('temporada', '6')).to.be.eql([{titulo: 'Vikings', anio: 2013, temporada: 6, episodios: 89, genero: 'drama-Historico'}, {titulo: 'Lucifer', anio: 2016, temporada: 6, episodios: 93, genero: 'fantasia-policia'}]);
    expect(serieCollection.search('episodios', '93')).to.be.eql([{titulo: 'Lucifer', anio: 2016, temporada: 6, episodios: 93, genero: 'fantasia-policia'}]);
    expect(serieCollection.search('genero', 'accion')).to.be.eql([{titulo: 'The Punisher', anio: 2017, temporada: 2, episodios: 26, genero: 'accion'}]);
  });
});

describe('Pruebas Unitarias de la clase Pelicula (Film)', ()=>{
  it('Test de instancia de la clase Pelicula', ()=>{
    expect(filmCollection).to.exist;
    expect(filmCollection).not.null;
  });
  it('Test de metodos de la clase Pelicula', ()=>{
    expect(filmCollection.getNumberOfItems()).to.be.equal(6);
    expect(filmCollection.search('titulo', 'The Ring')).to.be.eql([{titulo: 'The Ring', director: 'Gore Verbinski', anio: 2002, duracion: 116, genero: 'terror'}]);
    expect(filmCollection.search('director', 'Rob Schneider')).to.be.eql([{titulo: 'El Gran Stan', director: 'Rob Schneider', anio: 2004, duracion: 109, genero: 'comedia'}]);
    expect(filmCollection.search('anio', '2004')).to.be.eql([{titulo: 'White Chicks', director: 'Keenen Ivory Wayan', anio: 2004, duracion: 109, genero: 'comedia'}, {titulo: 'El Gran Stan', director: 'Rob Schneider', anio: 2004, duracion: 109, genero: 'comedia'}]);
    expect(filmCollection.search('genero', 'terror')).to.be.eql([{titulo: 'The Ring', director: 'Gore Verbinski', anio: 2002, duracion: 116, genero: 'terror'}]);
    expect(filmCollection.search('duracion', '92')).to.be.eql([{titulo: 'Nadie', director: 'Ilya Naishuller', anio: 2021, duracion: 92, genero: 'accion'}]);
  });
});

describe('Pruebas Unitarias de la clase Documental (Documentary)', ()=>{
  it('Test de instancia de la clase Documental', ()=>{
    expect(documentaryCollection).to.exist;
    expect(documentaryCollection).not.null;
  });
  it('Test de metodos de la clase Documental', ()=>{
    expect(documentaryCollection.getNumberOfItems()).to.be.equal(5);
    expect(documentaryCollection.search('titulo', 'Frente Antinuclear')).to.be.eql([{titulo: 'Frente Antinuclear', director: 'Rebecca Cammisa', anio: 2017, duracion: 100, pais: 'Estados Unidos', fotografia: 'Claudia Raschke', distribuidora: 'HBO Documentary Films'}]);
    expect(documentaryCollection.search('director', 'Bob Smeaton')).to.be.eql([{titulo: 'The Beatles Anthology', director: 'Bob Smeaton', anio: 1995, duracion: 600, pais: 'Reino Unido', fotografia: 'Eugene O Connor', distribuidora: 'American Broadcasting Company (ABC)'}]);
    expect(documentaryCollection.search('anio', '2020')).to.be.eql([{titulo: 'Lo que el pulpo me enseño', director: 'Pippa Ehrlich,& James Reed', anio: 2020, duracion: 85, pais: 'Sudafrica', fotografia: 'Roger Horrocks', distribuidora: 'Netflix'}]);
    expect(documentaryCollection.search('duracion', '100')).to.be.eql([{titulo: 'Frente Antinuclear', director: 'Rebecca Cammisa', anio: 2017, duracion: 100, pais: 'Estados Unidos', fotografia: 'Claudia Raschke', distribuidora: 'HBO Documentary Films'}, {titulo: 'The Salt of the Earth', director: 'Wim Wenders', anio: 2014, duracion: 100, pais: 'Francia', fotografia: 'Hugo Barbier', distribuidora: 'Amazonas Images'}]);
    expect(documentaryCollection.search('pais', 'Suecia')).to.be.eql([{titulo: 'Searching for a Sugar man', director: 'Malik Bendjelloul', anio: 2012, duracion: 87, pais: 'Suecia', fotografia: 'Camilla Skagerström', distribuidora: 'Sony Pictures Classics'}]);
    expect(documentaryCollection.search('fotografia', 'Hugo Barbier')).to.be.eql([{titulo: 'The Salt of the Earth', director: 'Wim Wenders', anio: 2014, duracion: 100, pais: 'Francia', fotografia: 'Hugo Barbier', distribuidora: 'Amazonas Images'}]);
    expect(documentaryCollection.search('distribuidora', 'HBO Documentary Films')).to.be.eql([{titulo: 'Frente Antinuclear', director: 'Rebecca Cammisa', anio: 2017, duracion: 100, pais: 'Estados Unidos', fotografia: 'Claudia Raschke', distribuidora: 'HBO Documentary Films'}]);
  });
});
