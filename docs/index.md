# Práctica 6: Clases e interfaces genéricas, Principios SOLID.
## Desarrollo de Sistemas Informáticos - Universidad de La Laguna

### 1. Introducción.

El objetivo de esta práctica es desarrollar tres ejercicios de programación. Uno de ellos destinados a la realización de las clases pertinentes que permita el combate entre dos personajes de universos definidos como puede ser Marvel, DC, Pokemon etc.., por otro lado también hemos de implementar las clases que se consideren necesario para hacer una plataforma que permita almacenar colecciones de series, peliculas y documentales y el ejercicio final se basa en desarrollar las clases necesarias para realizar una de las modificaciones del cifrado de César que permite cifrar un mensaje basado en un algoritmi de rotación del alfabeto. Para la realización de estos ejercicios se deberá hacer uso de los [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html) y clases e interfaces genericas.

>> **Nota: Si desea saber más acerca de los ejercicios le recomiendo que lea la Bibliografía situada en apartados posteriores.**

### 2. Ejercicios

Antes de comenzar a la implementación de las soluciones de los problemas propuestos hay que añadir al entorno de trabajo de la práctica 6  la configuración adecuada de las herramientas utilizadas hasta ahora, estas son,[typedoc](https://typedoc.org/), [mocha](https://mochajs.org/), [chai](https://www.chaijs.com/) y [TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas). Además de que se recomienda utilizar los principios SOLID, Instabul y Coveralls para realizar el cubrimiento del código.
* [Instabul](https://github.com/dwyl/learn-istanbul).
* [Coveralls](https://coveralls.io/)

#### 2.1 Ejercicio 1: El combate definitivo.
 
Se plantea desarollar las clases necesarias para poder desarrollar un combate entre dos luchadores de dos universos y que se calcule un ganador en base a ciertos criterios. Para realizar este ejercicio he decidido organizar mi codigo de la siguiente manera:
* fighter.ts: Fichero que define y almacena los metodos de la clase abstracta padre (o superClase) encargada de definir los datos y atributos de un luchador.
* registro.ts: Fichero que almacena el registro de luchadores que se conocen, con toda su información al respecto.
* combat.ts: Fichero que define el funcionamiento por turnos y las condiciones de victoria de dos luchadores y devuelve al ganador.
* subclases/: Dentro de esta carpeta situamos las diferentes clases que heredan de la clase *Fighter* (subClases) y que conforman todos los universos que se conocen.
  * dc.ts: Fichero que especifica los atributos de un luchador del universo de DC Comics.
  * pokemon.ts: Fichero que especifica los atributos de un luchador del universo de Pokemon.
  * marvel.ts: Fichero que especifica los atributos de un luchador del universo de Marvel Comics.
  * starwars.ts: Fichero que especifica los atributos de un luchador del universo de Star Wars.
  * patrullacanina.ts: Fichero que especifica los atributos de un luchador del universo de la Patrulla Canina.

Una vez conocida la estructura que se utilizará en este ejercicio comentaremos la funcionalidad definida y su funcionamiento:

* **Clase Fighter**: 
Para esta clase abstracta, por un lado se define un objeto denominado *fighterAttributes* que define las estadisticas de un luchador, estas son vida, ataque, defensa y velocidad. Posteriormente en el contructor se inicializa el nombre,  peso, altura, frase caracteristica , universo y estadisticas de un luchador y se definen los getters y setters correspondientes que se utilizarán.

```TypeScript

export type fighterAttributes = {
  vida: number,
  ataque: number,
  defensa: number,
  velocidad: number,
};

export abstract class Fighter {
  constructor(private readonly nombre: string, private readonly peso:number, private readonly altura: number, private readonly frase: string, private universo:string, private estadisticaLuchador: fighterAttributes) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
  }

  public getNombre() {
    return this.nombre;
  }

  public getPeso() {
    return this.peso;
  }

  public getAltura() {
    return this.peso;
  }

  public getFraseCaracteristica() {
    return this.frase;
  }

  public getUniverso() {
    return this.universo;
  }

  public getAtributos() {
    return this.estadisticaLuchador;
  }

  public setVida(vidaActual: number) {
    this.estadisticaLuchador.vida = vidaActual;
  }
}
```
Al ser una clase abstracta no se puede realizar pruebas, ya que no se puede instanciar objetos de clases abstractas.

* **Clase Registro**:
Para la clase registro se pretende declarar como atributo privado un array de Luchadores que simule como una base de datos de luchadores, donde queden registrados todos los luchadores y posteriormente se realiza el método que permite visualizar los nombres seguidos por comas de los diversos luchadores que se almacenan en la base de datos.

```TypeScript
import {Fighter} from "./fighter";

export class RegistroLuchadores {
  constructor(private BDDLuchadores: Fighter[]) {
    this.BDDLuchadores = BDDLuchadores;
  }

  public getRegistro() {
    return this.BDDLuchadores;
  }

  public setLuchador(Luchador: Fighter) {
    this.BDDLuchadores.push(Luchador);
  }

  public printBDD() {
    let cadena: string = '';
    for (let i: number = 0; i < this.BDDLuchadores.length; i++) {
      console.log(`Nombre: ${this.BDDLuchadores[i].getNombre()}`);
      cadena = cadena + this.BDDLuchadores[i].getNombre() + ', ';
    }
    cadena = cadena.substring(0, cadena.length - 2);
    return cadena;
  }
}

```

Para las pruebas unitarias de esta clase se define un objeto llamado registroCombatiente que registrara a todos los luchadores que se enfrentaran en los diversos combates.

```TypeScript
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

const registroCombatientes: RegistroLuchadores = new RegistroLuchadores([Pikachu, Deadpool, Joker, kyloRen, Marshall]);


describe('Pruebas unitarias de la clase Registro', ()=> {
  it('Test de metodos de la clase registro', ()=>{
    expect(registroCombatientes.printBDD()).to.be.eql('Pikachu, Deadpool, El Joker, Kylo Ren, Marshall');
  });
});

```

* **Clase Combat**:
La clase combate es la encargada de implementar el sistema de determinacion de un ganador tras el enfrentamiento de dos luchadores. Para ello se le pasa como atributos privados el primer luchador y el segundo luchador. Posteriormente:
  * La funcion *calculoDañoInflingido* dependiendo de quien sea el atacante calcula según la fórmula que se solicita en el ejercicio 1 de la práctica 5 (práctica anterior) el daño que se ha inflingido basado en una efectividad y se trunca el resultado a un número sin decimales.
  * La funcion *whoStart* determina quien es el luchador que comienza el combate en base a aquel luchador con mayor velocidad, es decir que el primero que ataca es el luchador que tiene mas velocidad.
  * La funcion *Combate de luchadores* inicializa al atacante como aquel que posee mas velocidad, muestra los datos de las estadistica de ambos luchadores y mientras ambos luchadores tengan vida se alterna el ataque mediante turnos  y se establece la nueva vida como la vida actual menos el daño recibido por el ataque del oponente, una vez alcanzada la vida a 0 de alguno de los dos luchadores, se calcula en otra funcion quien ha ganado.
  * La funcion *whoWinner* es la encargada de comprobar la vida de ambos luchadores y en caso de que la vida del primer luchador sea cero, muestra que ha ganado el segundo luchador y viceversa.
  * La funcion *calculoEfectividad* es la encargada de calcular la efectividad de los ataques infligidos entre ambos luchadores analizando el tipo de universo del que provienen los combatientes, para ello, he dictaminado una jerarquía entre todos los universos recogidos en las subclases:

```
  Pokemon es neutral contra a Marvel y Pokemon.
  Pokemon es fuerte contra Star Wars y Patrulla Canina.
  Pokemon es debil contra DC.

  Marvel es neutral contra Pokemon y Marvel.
  Marvel es fuerte contra DC.
  Marvel es debil contra Stars Wars y Patrulla Canina.
    
  DC es neutral contra Star Wars y DC
  DC es fuerte contra Pokemon
  DC es debil contra Marvel y patrulla canina

  Stars Wars es neutral contra DC y Star Wars
  Stars Wars es fuerte contra Patrulla Canina y Marvel
  Stars Wars es debil contra Pokemon

  Patrulla Canina es neutral contra Patrulla canina
  Patrulla Canina es fuerte contra DC y Marvel
  Patrulla Canina es debil contra Pokemon y Star Wars
```

El codigo resultante es:

```TypeScript
import {Fighter} from "./fighter";

export class Combat {
  constructor(private luchador: Fighter, private secondLuchador:Fighter) {
    this.luchador = luchador;
    this.secondLuchador = secondLuchador;
  }

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

  public whoWinner(): string {
    if (this.luchador.getAtributos().vida <= 0) {
      console.log(`»»»» El ganador del combate es: ${this.secondLuchador.getNombre()} «««« `);
      return this.secondLuchador.getNombre();
    } else {
      console.log(`»»»» El ganador del combate es: ${this.luchador.getNombre()} ««««`);
      return this.luchador.getNombre();
    }
  }

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

```
 En cuanto a las pruebas unitarias se definen diversos combates entre personajes de estos universos

```TypeScript
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

describe('Pruebas unitarias de la clase Combate', ()=> {
  it('Test de metodos de la clase Combat', ()=>{
    expect(combate1.combateLuchadores()).to.be.eql('Deadpool');
    expect(combate2.combateLuchadores()).to.be.eql('Deadpool');
    expect(combate3.combateLuchadores()).to.be.eql('Kylo Ren');
    expect(combate4.combateLuchadores()).to.be.eql('Pikachu');
  });
});

```
* **Subclases / Pokemon**:
Es una clase que hereda de la clase padre *Fighter* y implementa un atributo más que es el tipo del pokemon, si es electrico, fuego, agua o hierba tal como en ejercicios anteriores.

```TypeScript
import {Fighter, fighterAttributes} from "../fighter";

export class Pokemon extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo: string, estadisticaLuchador: fighterAttributes, private readonly tipo: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.tipo = tipo;
  }
  getTipo() {
    return this.tipo;
  }
}

```
Las pruebas unitarias son:

```TypeScript
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
```
* **Subclass / Marvel**:
Es una clase que hereda de la clase padre *Fighter* y implementa un atributo más que es el superpoder que posee un superheroe de marvel.

```TypeScript
import {Fighter, fighterAttributes} from "../fighter";

export class Marvel extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo:string, estadisticaLuchador: fighterAttributes, private readonly superPoder: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.superPoder = superPoder;
  }

  getPoder() {
    return this.superPoder;
  }
}

```
Las pruebas unitarias son:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../src/ejercicio-1/subclases/marvel';
import {Pokemon} from '../src/ejercicio-1/subclases/pokemon';
import {DC} from '../src/ejercicio-1/subclases/dc';
import {StarWars} from '../src/ejercicio-1/subclases/starwars';
import {PatrullaCanina} from '../src/ejercicio-1/subclases/patrullacanina';
import {RegistroLuchadores} from '../src/ejercicio-1/registro';
import {Combat} from '../src/ejercicio-1/combat';

const Deadpool: Marvel = new Marvel('Deadpool', 80, 1.80, 'CHIMICHANGA', 'Marvel', {vida: 500, ataque: 70, defensa: 80, velocidad: 40}, 'hiper regeneración');

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

```
* **Subclases / DC**:
Es una clase que hereda de la clase padre *Fighter* y implementa un atributo más que es el superpoder que posee un superheroe u villano de DC Comics.

```TypeScript
import {Fighter, fighterAttributes} from "../fighter";

export class DC extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo:string, estadisticaLuchador: fighterAttributes, private readonly superPoder: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.superPoder = superPoder;
  }

  getPoder() {
    return this.superPoder;
  }
}

```
Las pruebas unitarias son:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../src/ejercicio-1/subclases/marvel';
import {Pokemon} from '../src/ejercicio-1/subclases/pokemon';
import {DC} from '../src/ejercicio-1/subclases/dc';
import {StarWars} from '../src/ejercicio-1/subclases/starwars';
import {PatrullaCanina} from '../src/ejercicio-1/subclases/patrullacanina';
import {RegistroLuchadores} from '../src/ejercicio-1/registro';
import {Combat} from '../src/ejercicio-1/combat';

const Joker: DC = new DC('El Joker', 72, 1.82, 'HA-HA-HA', 'DC', {vida: 250, ataque: 60, defensa: 90, velocidad: 55}, 'Inmunidad al Veneno');

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
```
* **Subclases / Star Wars**:
Es una clase que hereda de la clase padre *Fighter* y implementa dos atributo más que es el lado de la fuerza que esta, si es del lado luminoso o del lado oscuro y el tipo de sable que posee, si es verde, azul u rojo.

```TypeScript
import {Fighter, fighterAttributes} from "../fighter";

export class StarWars extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo:string, estadisticaLuchador: fighterAttributes, private readonly fuerza: string, private readonly sable: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.fuerza = fuerza;
    this.sable = sable;
  }

  getFuerza() {
    return this.fuerza;
  }

  getSable() {
    return this.sable;
  }
}

```
Las pruebas unitarias son:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../src/ejercicio-1/subclases/marvel';
import {Pokemon} from '../src/ejercicio-1/subclases/pokemon';
import {DC} from '../src/ejercicio-1/subclases/dc';
import {StarWars} from '../src/ejercicio-1/subclases/starwars';
import {PatrullaCanina} from '../src/ejercicio-1/subclases/patrullacanina';
import {RegistroLuchadores} from '../src/ejercicio-1/registro';
import {Combat} from '../src/ejercicio-1/combat';

const kyloRen = new StarWars('Kylo Ren', 89, 1.89, 'No estás solo', 'Star Wars', {vida: 400, ataque: 100, defensa: 57, velocidad: 22}, 'Oscuro', 'Rojo');


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
```
* **Subclases / Patrulla Canina**:
Es una clase que hereda de la clase padre *Fighter* y implementa un atributo más que es la raza que tiene el perro.

```TypeScript
import {Fighter, fighterAttributes} from "../fighter";

export class PatrullaCanina extends Fighter {
  constructor(nombre:string, peso: number, altura: number, frase: string, universo:string, estadisticaLuchador: fighterAttributes, private readonly raza: string) {
    super(nombre, peso, altura, frase, universo, estadisticaLuchador);
    this.raza = raza;
  }

  getRaza() {
    return this.raza;
  }
}

```
Las pruebas unitarias son:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../src/ejercicio-1/subclases/marvel';
import {Pokemon} from '../src/ejercicio-1/subclases/pokemon';
import {DC} from '../src/ejercicio-1/subclases/dc';
import {StarWars} from '../src/ejercicio-1/subclases/starwars';
import {PatrullaCanina} from '../src/ejercicio-1/subclases/patrullacanina';
import {RegistroLuchadores} from '../src/ejercicio-1/registro';
import {Combat} from '../src/ejercicio-1/combat';

const Marshall = new PatrullaCanina('Marshall', 28, 0.64, 'A toda Mecha', 'Patrulla Canina', {vida: 700, ataque: 200, defensa: 100, velocidad: 110}, 'Dalmata' );

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

```

#### 2.2 Ejercicio 2: DSIflix.

Para la resolución de este ejercicio he decidido utilizar la siguiente jerarquía:

* Stremeable.ts: es una interfaz que especifica los métodos a implementar para trabajar con una colección Streameable.
* basicStremeableCollection.ts: Clase abstracta padre o super clase que implementa los metodos de una coleccion streameable y define dos metodos abstractos. 
* Objects/: directorio donde iran alojados todos los objetos que definen las propiedades de cada tipo de colección.
  * objectDocumentary.ts: fichero que define las propiedades que recogera un objeto de tipo documental.
  * objectFilm.ts: fichero que define las propiedades que recogera un objeto de tipo pelicula.
  * objectSerie.ts: fichero que define las propiedades que recogera un objeto de tipo serie.

* subclass/: En este directorio iran las diferentes subclases o clases hijas que heredan de la clases padre basicStreameableCollection y definen los metodos abstractos del mismo.
  * documentary.ts: Fichero que implementa una coleccion de documentales.
  * film.ts: Fichero que implementa una coleccion de peliculas.
  * serie.ts: Fichero que implementa una coleccion de series.

* interfaz **Stremeable**: 
Se define la interfaz encargada de definir un método que se encargue de añadir nuevos elementos a la coleccion, obtener el elemento de una coleccion y obtener el numero total de elementos que tiene una colección.

```TypeScript

export interface Stremeable <T> {
  addItem(newItem: T): void;
  getCollectionItem(): T[]
  getNumberOfItems(): number;
}
```

* Clase Padre **basicStreameableCollection**:
Definimos una clase abstracta que implemente desde la interfaz Streameable una collección que será un array de elementos de cualquier tipo generico de datos. además los metodos que hereden de esta clase tiene que implementar un metodo *search* que permita buscar dentro de la coleccion segun ciertos filtros y un metodo *getcollecionitem* que permita obtener un elemento de la coleccion posteriormente se implementan los metodos restantes de la interfaz Streameable, que permita tanto añadir un nuevo iteam a la coleccion como obtener el numero de items que componen la la collecion, cabe destacar que cuando digo items, me refiero a series, peliculas y documentales que será lo que se almacene.

```TypeScript
import {Stremeable} from "./stremeable";

export abstract class BasicStreameableCollection <T> implements Stremeable<T> {
  constructor(protected collection: T[]) {}

  abstract search(parametro: string, valor: string): T[];
  abstract getCollectionItem(): T[];

  public addItem(newItem: T): void {
    this.collection.push(newItem);
  }

  public getNumberOfItems(): number {
    return this.collection.length;
  }
}
```
* Objeto de tipo **Serie**:
Antes de definir las subclases que heredarán de la super clase, creare diferentes objetos con sus propios atributos que permitan definir la información necesaria. En el caso de serie  creamos un objeto que  defina el titulo, año, temporadas, episodios y genero que tiene una serie determinada.

```TypeScript
export type series = {
  titulo: string;
  anio: number;
  temporada: number;
  episodios: number;
  genero: string;
}
```
* Objeto de tipo **Pelicula(Film)**:
De igual forma se define el objeto pelicula, que posee un titulo, director, año, duracion y genero en el que se encasilla la pelicula.

```TypeScript
export type pelicula = {
  titulo: string;
  director: string;
  anio: number;
  duracion: number;
  genero: string;
}

```
* Objeto de tipo **Documental(Documentary)**:
Y de esta forma también se crea un objeto documental que se encarga de definir el titulo, director, año, duracion, pais, fotografia y distribuidora del documental.

```TypeScript
export type documental = {
  titulo: string;
  director: string;
  anio: number;
  duracion: number;
  pais: string;
  fotografia: string;
  distribuidora: string;
}

```

* Clases hijas **Serie**, **Pelicula** ,**Documental**:
A continuación se definen las subclases o clases hijas serie, pelicula y docu,mental que serán una coleccion de series streameables. para ello heredamos de la super clase *basicStreameableCollection* e y en nuestro constructor inicializamos un array de elementos de tipo Serie, Pelicula y Documental respectivamente, posteriormente implementamos los metodos search y getcollectionItem. 

Para el metodo search se le pasa dos parametros uno es el atributo que se desea fltrar y el segundo el valor que se desea buscar e iteramos en switch dependiendo del parametro por el que se quiera filtar. Por ejemplo, dentro de una coleccion de series se quieres buscar por titulo el nombre Stranger Things, de esta forma se hace uso del método filter que proporciona Javascript, este basicamente devuelve el elemento de un array que cumple la funcion que se le pasa, ene ste caso que el titulo del item sea el valor que ha introducido el usuario y el resultado se almacena en una variable que se devuelve, si desea mas informacion, puede revisar la bibliografia. Mientras que *getcollectionItem* devuelve la coleccion de series inicializada en el contructor,en caso de que no se encuentre devuelve un array vacio.  De esta forma igual que se hizo en la clase Serie se opera en la clase Documentary y Film.

```TypeScript
import {BasicStreameableCollection} from "../basiStremeableCollection";
import {series} from '../objects/objetSerie';

export class Serie extends BasicStreameableCollection <series> {
  constructor(protected collection: series[]) {
    super(collection);
  }

  getCollectionItem(): series[] {
    return this.collection;
  }

  search(parametro: string, valor: string): series[] {
    let busqueda: series[] = [];
    switch (parametro) {
      case 'titulo':
        busqueda = this.getCollectionItem().filter((item) => (item.titulo == valor));
        return busqueda;
        break;
      case 'anio':
        busqueda = this.getCollectionItem().filter((item) => (item.anio.toString() == valor));
        return busqueda;
        break;
      case 'temporada':
        busqueda = this.getCollectionItem().filter((item) => (item.temporada.toString() == valor));
        return busqueda;
        break;
      case 'episodios':
        busqueda = this.getCollectionItem().filter((item) => (item.episodios.toString() == valor));
        return busqueda;
        break;
      case 'genero':
        busqueda = this.getCollectionItem().filter((item) => (item.genero == valor));
        return busqueda;
        break;
      default:
        return [];
        break;
    }
  }
}

```
* Clase hija **Pelicula (Film)**:

```TypeScript
import {BasicStreameableCollection} from "../basiStremeableCollection";
import {pelicula} from "../objects/objectFilm";

export class Film extends BasicStreameableCollection <pelicula> {
  constructor(protected collection: pelicula[]) {
    super(collection);
  }

  getCollectionItem(): pelicula[] {
    return this.collection;
  }

  search(parametro: string, valor: string): pelicula[] {
    let busqueda: pelicula[] = [];
    switch (parametro) {
      case 'titulo':
        busqueda = this.getCollectionItem().filter((item) => (item.titulo == valor));
        return busqueda;
        break;
      case 'director':
        busqueda = this.getCollectionItem().filter((item) => (item.director == valor));
        return busqueda;
        break;
      case 'anio':
        busqueda = this.getCollectionItem().filter((item) => (item.anio.toString() == valor));
        return busqueda;
        break;
      case 'duracion':
        busqueda = this.getCollectionItem().filter((item) => (item.duracion.toString() == valor));
        return busqueda;
        break;
      case 'genero':
        busqueda = this.getCollectionItem().filter((item) => (item.genero == valor));
        return busqueda;
        break;
      default:
        return [];
        break;
    }
  }
}

```
* Clase hija **Documental(Documentary)**:
```TypeScript
import {BasicStreameableCollection} from "../basiStremeableCollection";
import {documental} from "../objects/objectDocumentary";

export class Documentary extends BasicStreameableCollection <documental> {
  constructor(protected collection: documental[]) {
    super(collection);
  }

  getCollectionItem(): documental[] {
    return this.collection;
  }
  search(parametro: string, valor: string): documental[] {
    let busqueda: documental[] = [];
    switch (parametro) {
      case 'titulo':
        busqueda = this.getCollectionItem().filter((item) => (item.titulo == valor));
        return busqueda;
        break;
      case 'director':
        busqueda = this.getCollectionItem().filter((item) => (item.director == valor));
        return busqueda;
        break;
      case 'anio':
        busqueda = this.getCollectionItem().filter((item) => (item.anio.toString() == valor));
        return busqueda;
        break;
      case 'pais':
        busqueda = this.getCollectionItem().filter((item) => (item.pais == valor));
        return busqueda;
        break;
      case 'duracion':
        busqueda = this.getCollectionItem().filter((item) => (item.duracion.toString() == valor));
        return busqueda;
        break;
      case 'fotografia':
        busqueda = this.getCollectionItem().filter((item) => (item.fotografia == valor));
        return busqueda;
        break;
      case 'distribuidora':
        busqueda = this.getCollectionItem().filter((item) => (item.distribuidora == valor));
        return busqueda;
        break;
      default:
        return [];
        break;
    }
  }
}

```

Para las pruebas unitarias se crean tres colecciones una coleccion que recoge diversas series otra que recoge diversas peliculas y otra que recoger diferentes documentales, ademas se comprueba de que se puede añadir un elemento nuevo a la coleccion y que aumenta el tamaño de la coleccion en el numero de items que se han introducido. Además se prueba que se puede buscar con cada uno de los filtros que se ha especificado en el metodo search.


```TypeScript
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

```
#### 2.3 Ejercicio 3: El cifrado indescifrable.



### Problemas y Soluciones.

* El principal problema que me he encontrado durante estos ejercicios han sido por culpa mia de no entender ni razonar aquello que pone en el enunciado, llegando a atascarme varias veces sin motivo.

### Bibliografía.
* [Guión de la Práctica 6](https://ull-esit-inf-dsi-2122.github.io/prct06-generics-solid/)
* [Teoría de la asignatura - Clases e interfaces genericas](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-generics.html)
* [Desarrollo dirigido por pruebas TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas)
* [Github](https://github.com/)
* [Repositorio de la práctica](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101130408.git)
* [Filtrar elementos en TypeScript](https://ed.team/blog/javascript-filtrar-elementos-de-un-array-con-filter)
* [clases e interfaces genericas](https://desarrolloweb.com/articulos/generics-typescript.html)
* [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)
* [Metodo find de Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

* Referencias de las Peliculas, Documentales y Series utilizadas en las pruebas:
  * [Stranger Things](https://es.wikipedia.org/wiki/Stranger_Things)
  * [Vikings](https://es.wikipedia.org/wiki/Vikings_(serie_de_televisi%C3%B3n))
  * [The Punisher](https://es.wikipedia.org/wiki/The_Punisher_(serie_de_televisi%C3%B3n))
  * [Lucifer](https://es.wikipedia.org/wiki/Lucifer_(serie_de_televisi%C3%B3n))
  * [White Chicks](https://es.wikipedia.org/wiki/White_Chicks)
  * [El Gran Stan](https://es.wikipedia.org/wiki/Big_Stan)
  * [Avengers: Endgame](https://es.wikipedia.org/wiki/Avengers:_Endgame)
  * [Creed](https://es.wikipedia.org/wiki/Creed_(pel%C3%ADcula))
  * [The Ring](https://es.wikipedia.org/wiki/The_Ring_(pel%C3%ADcula))
  * [Nadie](https://www.filmaffinity.com/es/film907561.html)
  * [Lo que el pulpo me enseño](https://www.filmaffinity.com/es/film677436.html)
  * [Frente AntiNuclear](https://www.filmaffinity.com/es/film236177.html)
  * [La Sal de la Tierra](https://www.filmaffinity.com/es/film907354.html)
  * [Searching for Sugar Man](https://www.filmaffinity.com/es/film625347.html)

* [Cifrado de Cesar](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar)
* [Cifrado de vigenere](https://es.wikipedia.org/wiki/Cifrado_de_Vigen%C3%A8re)
* [Metodo CharArt javascript](https://guru99.es/string-charat-method-java/)
---
Autor: Joel Francisco Escobar Socas - 2021/2022.
---