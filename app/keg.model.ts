export class Keg {
  public pintsRemaining: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public ibu: number, public tap: number, public status: string = 'untapped') {  }
}
