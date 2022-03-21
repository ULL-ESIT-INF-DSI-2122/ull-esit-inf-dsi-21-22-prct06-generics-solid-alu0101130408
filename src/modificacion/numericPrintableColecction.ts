import {PrintableCollection} from "./printableCollection";

export class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(items: number[]) {
    super(items);
  }

  print(): number[] {
    const resultado: number[] = [];
    for (let i: number = 0; i < this.items.length; i++) {
      resultado.push(i);
      return resultado;
    }
  }
}
