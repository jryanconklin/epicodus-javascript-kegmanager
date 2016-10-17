import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let keg of childKegList">
      <p (click)="selectKeg(keg)" >{{ keg.brand }} - {{ keg.name }}</p>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() selectKegClickSender = new EventEmitter();
  selectKeg(keg: Keg) {
    this.selectKegClickSender.emit(keg);
  }
}
