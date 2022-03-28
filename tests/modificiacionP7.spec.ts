import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/modificacionP7/primenumber';

const primerosprimos = PrimeNumber.getPrimeNumberInstance();
primerosprimos.setValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

describe('Pruebas unitarias de la clase Prime number', () => {
  it('Pruebas de instancia de la clase prime number', () => {
    expect(primerosprimos).to.exist;
    expect(primerosprimos.getNumberOfElement()).to.be.eql(1);
  });
  it('Pruebas de instancia de busqueda de n hasta m numeros', () => {
    expect(primerosprimos.rangeNMPrimos(5, 11)).to.be.eql([5, 7, 11]);
  });
});
