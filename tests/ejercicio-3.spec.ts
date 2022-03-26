import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio-3/cifrado';
import {Descifrado} from '../src/ejercicio-3/descifrado';

const cifrarMensaje1: Cifrado = new Cifrado('abcdefghijklmnopqrstuvwxyz', 'Hola mundo', 'clave');
const cifrarMensaje2: Cifrado = new Cifrado('abcdefghijklmnopqrstuvwxyz', 'Me llamo Joel', 'gato');

const descifrarMessage1: Descifrado = new Descifrado('abcdefghijklmnopqrstuvwxyz', 'kamwrvoep', 'clave');
const descifrarMessage2: Descifrado = new Descifrado('abcdefghijklmnopqrstuvwxyz', 'tffabnpkpfm', 'gato');

describe('Pruebas Unitarias de la clase Cifrado', ()=>{
  it('Test de instancia de la clase cifrado', ()=> {
    expect(cifrarMensaje1).to.exist;
    expect(cifrarMensaje1).not.null;
    expect(cifrarMensaje2).to.exist;
    expect(cifrarMensaje2).not.null;
  });
  it('Test de prueba de funcionamiento de la clase cifrado para el primer cifrado', ()=> {
    expect(cifrarMensaje1.cifrar()).to.be.eql('kamwrvoep');
  });
  it('Test de prueba de funcionamiento de la clase cifrado para el segundo cifrado', ()=> {
    expect(cifrarMensaje2.cifrar()).to.be.eql('tffabnpkpfm');
  });
});

describe('Pruebas Unitarias de la clase Descifrado', ()=>{
  it('Test de instancia de la clase Descifrado', ()=> {
    expect(descifrarMessage1).to.exist;
    expect(descifrarMessage1).not.null;
    expect(descifrarMessage2).to.exist;
    expect(descifrarMessage2).not.null;
  });
  it('Test de prueba de funcionamiento de la clase cifrado para el primer cifrado', ()=> {
    expect(descifrarMessage1.descifrar()).to.be.eql('holamundo');
  });
  it('Test de prueba de funcionamiento de la clase cifrado para el segundo cifrado', ()=> {
    expect(descifrarMessage2.descifrar()).to.be.eql('mellamojoel');
  });
});

