import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../src/ejercicio-1/subclases/marvel';
import {Pokemon} from '../src/ejercicio-1/subclases/pokemon';
import {DC} from '../src/ejercicio-1/subclases/dc';
import {StarWars} from '../src/ejercicio-1/subclases/starwars';
import {PatrullaCanina} from '../src/ejercicio-1/subclases/patrullacanina';
import {RegistroLuchadores} from '../src/ejercicio-1/registro';
import {Combat} from '../src/ejercicio-1/combat';

const Pikachu: Pokemon = new Pokemon('Pikachu', 6, 0.4, 'Pika-Pika', 'Pokemon', {vida: 350, ataque: 55, defensa: 40, velocidad: 90}, 'electrico');
const Deadpool: Marvel = new Marvel('Deadpool', 80, 1.80, 'CHIMICHANGA', 'Marvel', {vida: 500, ataque: 70, defensa: 80, velocidad: 40}, 'hiper regeneración');
const Joker: DC = new DC('El Joker', 72, 1.82, 'HA-HA-HA', 'DC', {vida: 250, ataque: 60, defensa: 90, velocidad: 55}, 'Inmunidad al Veneno');
const kyloRen = new StarWars('Kylo Ren', 89, 1.89, 'No estás solo', 'Star Wars', {vida: 400, ataque: 100, defensa: 57, velocidad: 22}, 'Oscuro', 'Rojo');
const Marshall = new PatrullaCanina('Marshall', 28, 0.64, 'A toda Mecha', 'Patrulla Canina', {vida: 700, ataque: 200, defensa: 100, velocidad: 110}, 'Dalmata' );

const combate1: Combat = new Combat(Pikachu, Deadpool);
const combate2: Combat = new Combat(Deadpool, Joker);
const combate3: Combat = new Combat(kyloRen, Marshall);
const combate4: Combat = new Combat(Marshall, Pikachu);

const registroCombatientes: RegistroLuchadores = new RegistroLuchadores([Pikachu, Deadpool, Joker, kyloRen, Marshall]);

describe('Pruebas unitarias de la clase Pokemon', ()=> {
  it('Test de instancia de la clase pokemon', ()=>{
    expect(Pikachu).to.exist;
    expect(Pikachu).not.null;
  });
  it('Test de metodos de la clase pokemon', ()=>{
    expect(Pikachu.getNombre()).to.be.eql('Pikachu');
    expect(Pikachu.getAtributos().ataque).to.be.eql(55);
    expect(Pikachu.getUniverso()).to.be.eql('Pokemon');
    expect(Pikachu.getFraseCaracteristica()).to.be.eql('Pika-Pika');
    expect(Pikachu.getTipo()).to.be.eql('electrico');
  });
});

describe('Pruebas unitarias de la clase Marvel', ()=> {
  it('Test de instancia de la clase Marvel', ()=>{
    expect(Deadpool).to.exist;
    expect(Deadpool).not.null;
  });
  it('Test de metodos de la clase Marvel', ()=>{
    expect(Deadpool.getNombre()).to.be.eql('Deadpool');
    expect(Deadpool.getAtributos().vida).to.be.eql(500);
    expect(Deadpool.getUniverso()).to.be.eql('Marvel');
    expect(Deadpool.getFraseCaracteristica()).to.be.eql('CHIMICHANGA');
    expect(Deadpool.getPoder()).to.be.eql('hiper regeneración');
  });
});

describe('Pruebas unitarias de la clase DC', ()=> {
  it('Test de instancia de la clase DC', ()=>{
    expect(Joker).to.exist;
    expect(Joker).not.null;
  });
  it('Test de metodos de la clase DC comics', ()=>{
    expect(Joker.getNombre()).to.be.eql('El Joker');
    expect(Joker.getAtributos().defensa).to.be.eql(90);
    expect(Joker.getUniverso()).to.be.eql('DC');
    expect(Joker.getFraseCaracteristica()).to.be.eql('HA-HA-HA');
    expect(Joker.getPoder()).to.be.eql('Inmunidad al Veneno');
  });
});

describe('Pruebas unitarias de la clase Star Wars', ()=> {
  it('Test de instancia de la clase Star Wars', ()=>{
    expect(kyloRen).to.exist;
    expect(kyloRen).not.null;
  });
  it('Test de metodos de la clase Star Wars', ()=>{
    expect(kyloRen.getNombre()).to.be.eql('Kylo Ren');
    expect(kyloRen.getAtributos().ataque).to.be.eql(100);
    expect(kyloRen.getUniverso()).to.be.eql('Star Wars');
    expect(kyloRen.getFraseCaracteristica()).to.be.eql('No estás solo');
    expect(kyloRen.getFuerza()).to.be.eql('Oscuro');
    expect(kyloRen.getSable()).to.be.eql('Rojo');
  });
});

describe('Pruebas unitarias de la clase Patrulla Canina', ()=> {
  it('Test de instancia de la clase Patrulla Canina', ()=>{
    expect(Marshall).to.exist;
    expect(Marshall).not.null;
  });
  it('Test de metodos de la clase Patrulla Canina', ()=>{
    expect(Marshall.getNombre()).to.be.eql('Marshall');
    expect(Marshall.getAtributos().vida).to.be.eql(700);
    expect(Marshall.getUniverso()).to.be.eql('Patrulla Canina');
    expect(Marshall.getFraseCaracteristica()).to.be.eql('A toda Mecha');
    expect(Marshall.getRaza()).to.be.eql('Dalmata');
  });
});


describe('Pruebas unitarias de la clase Combate', ()=> {
  it('Test de metodos de la clase Combat', ()=>{
    expect(combate1.combateLuchadores()).to.be.eql('Deadpool');
    expect(combate2.combateLuchadores()).to.be.eql('Deadpool');
    expect(combate3.combateLuchadores()).to.be.eql('Kylo Ren');
    expect(combate4.combateLuchadores()).to.be.eql('Pikachu');
  });
});


describe('Pruebas unitarias de la clase Registro', ()=> {
  it('Test de metodos de la clase registro', ()=>{
    expect(registroCombatientes.printBDD()).to.be.eql('Pikachu, Deadpool, El Joker, Kylo Ren, Marshall');
  });
});
