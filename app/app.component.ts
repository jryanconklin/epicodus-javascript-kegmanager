import { Component, Input, Output } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <h1>My First Angular 2 App</h1>
    <div class='row'>
      <div class='col-xs-6'>
        <keg-list
            [childKegList]="masterKegList"
          ></keg-list>
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
    new Keg('Vortex IPA', 'Fort George', 5.50, 7.7),
    new Keg('Total Domination IPA', 'Ninkasi', 5.00, 6.8),
    new Keg('Passion Fruit Sour', 'Breakside', 6.00, 5.2),
    new Keg('Kriek', 'Cascade Barrelhouse', 4.50, 6.4)
  ];
  selectedKeg: Keg = this.masterKegList[0];
  pourPint() {
    if (this.selectedKeg.pintsRemaining > 0) {
      this.selectedKeg.pintsRemaining--;
    } else {
      alert("Out of Beer, Tap New Keg");
    }
  } //End Pour Pint



}
