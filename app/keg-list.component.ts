import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h3>Our Kegs
      <small>
        <select (change)="filterList($event.target.value)" class='pull-right'>
          <option value='allKegs'>Show All</option>
          <option value='untapped'>Show Untapped</option>
          <option value='empty'>Show Empty Kegs</option>
          <option value='lowKegs'>Show Low</option>
        </select>
      </small>
    </h3>
    <div *ngFor="let keg of childKegList | display_option:filter">
      <p (click)="selectKeg(keg)" [ngClass]="{'cheap': keg.price <= 5, 'expensive': keg.price > 5}">{{ keg.brand }} - {{ keg.name }}</p>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() selectKegClickSender = new EventEmitter();
  public filter = 'allKegs';
  selectKeg(keg: Keg) {
    this.selectKegClickSender.emit(keg);
  }
  filterList(filterSelection) {
    this.filter = filterSelection;
  }
}
