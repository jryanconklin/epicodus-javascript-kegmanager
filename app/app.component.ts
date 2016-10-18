import { Component, Input, Output } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>

    <h1>Super Cool Bar Kegs!</h1>
    <div class='row'>
      <div class='col-xs-6'>
        <keg-taps
            [childKegList]="masterKegList"
            (selectCurrentKegClick)="showKegs($event)"
          ></keg-taps>
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
        <keg-swap
            [parentKegData]="[masterKegList, selectedKeg]"
            (kegSwapClickedSender)="swapKeg($event)"
          ></keg-swap>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg('Vortex IPA', 'Fort George', 5.50, 7.7, 90, 3, 'tapped'),
    new Keg('Total Domination IPA', 'Ninkasi', 5.00, 6.8, 65, 4, 'tapped'),
    new Keg('Passion Fruit Sour', 'Breakside', 6.00, 5.2, 0, 1, 'tapped'),
    new Keg('Kriek', 'Cascade Barrelhouse', 7.50, 6.4, 0, 2, 'tapped'),
    new Keg('Pabst Blue Ribbon', 'InBev', 2.50, 3.4, 21, 5, 'tapped'),
    new Keg('IPA No. 5', 'Groundbreaker', 4.50, 6, 70, 8, 'tapped'),
    new Keg('Dark Ale', 'Groundbreaker', 4.50, 5.5, 35, 7, 'tapped'),
    new Keg('Phobos Single Hop Red Ale', 'Ecliptic Brewing', 4.50, 5.2, 34, 6, 'tapped'),
    new Keg('Quasar Pale Ale', 'Ecliptic Brewing', 4.50, 6, 65, null),
    new Keg('Fireside Chat', '21st Amendment', 5.50, 7.9, 45, null)
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

  swapKeg(newKeg: Keg) {
    newKeg.tap = this.selectedKeg.tap;
    newKeg.status = "tapped";
    this.selectedKeg.tap = null;
    this.selectedKeg.status = "empty";
    this.selectedKeg = newKeg;
  }
}
