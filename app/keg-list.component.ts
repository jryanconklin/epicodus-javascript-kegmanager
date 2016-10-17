import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Keg } from './keg.model';
import { PintsRemainingPipe } from './pints-remaining.pipe';

@Component({
  selector: 'keg-list',
  template: `
    <h3>Our Kegs
      <small>
        <select (change)="filterList($event.target.value)" class='pull-right'>
          <option value='allKegs'>Show All</option>
          <option value='lowKegs'>Show Low</option>
        </select>
      </small>
    </h3>
    <div *ngFor="let keg of childKegList | pints_remaining:filter">
      <p (click)="selectKeg(keg)" >{{ keg.brand }} - {{ keg.name }}</p>
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
