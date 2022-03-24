import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/fighter';
import {Marvel} from '../src/ejercicio-1/marvel';
import {Pokemon} from '../src/ejercicio-1/pokemon';

const Pikachu: Pokemon = new Pokemon('Pikachu', 6, 0.4, 'pika-pika', {vida: 350, ataque: 55, defensa: 40, velocidad: 90}, "electrico");
const Deadpool: Marvel = new Marvel('Deadpool', 80, 1.80, 'Cogabunga', {vida: 360, ataque: 70, defensa: 80, velocidad: 40}, 'Marvel');

describe('Pruebas unitarias de la clase Pokemon', ()=> {
  it('Test de instancia de la clase pokemon', ()=>{
    expect(Pikachu).to.exist;
  });
});

describe('Pruebas unitarias de la clase Marvel', ()=> {
  it('Test de instancia de la clase Marvel', ()=>{
    expect(Deadpool).to.exist;
  });
});
