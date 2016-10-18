export class Keg {
  public pintsRemaining: number = 124;
  public status = 'untapped';
  constructor(public name: string, public brand: string, public price: number, public abv: number, public ibu: number) {  }
}
