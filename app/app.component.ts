import { Component, Input, Output } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <h1>Super Cool Bar Kegs!</h1>
    <div class='row'>
      <div class='col-xs-6'>
        <keg-list
            [childKegList]="masterKegList"
            (selectKegClickSender)="showKegs($event)"
          ></keg-list>
        <keg-add
            (newKegSender)="addKeg($event)"
          ></keg-add>
      </div>
      <div class='col-xs-6'>
        <keg-info
            [selectedKeg]="selectedKeg"
            (pourClickedSender)="pourPint()"
          ></keg-info>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg('Vortex IPA', 'Fort George', 5.50, 7.7, 90),
    new Keg('Total Domination IPA', 'Ninkasi', 5.00, 6.8, 65),
    new Keg('Passion Fruit Sour', 'Breakside', 6.00, 5.2, 0),
    new Keg('Kriek', 'Cascade Barrelhouse', 4.50, 6.4, 0)
  ];

  selectedKeg: Keg = null;
  showKegs(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }


  pourPint() {
    if (this.selectedKeg.pintsRemaining > 0) {
      this.selectedKeg.pintsRemaining--;
    } else {
      alert("Out of Beer, Tap New Keg");
    }
  } //End Pour Pint

  addKeg(newKegToAdd: Keg) {
    this.masterKegList.push(newKegToAdd);
  }


}
