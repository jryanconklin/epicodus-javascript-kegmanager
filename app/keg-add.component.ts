import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-add',
  template: `
  <h3>Add a New Keg!</h3>
    <div class='form-group'>
      <input class='form-control' #newName placeholder="new beer name">
      <input class='form-control' #newBrand placeholder="new beer brand">
      <input class='form-control' type='number' #newPrice placeholder="new beer price">
      <input class='form-control' type='number' #newABV placeholder="new beer ABV">
    </div>
    <div>
      <button (click)=
        "addClicked(newName.value, newBrand.value, newPrice.value, newABV.value);
        newName.value ='';
        newBrand.value ='';
        newPrice.value ='';
        newABV.value ='';
        ">Add</button>
    </div>
  `
})

export class KegAddComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, ABV: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, ABV);
    if (name == "" || brand == "" || price == null || ABV == null) {
      alert('Please fill in all form elements. How about we just start over?')
    } else {
      this.newKegSender.emit(newKegToAdd);
    }
  }
}
