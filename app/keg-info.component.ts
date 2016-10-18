import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-info',
  template: `
    <div *ngIf="selectedKeg">
      <h3>{{ selectedKeg.brand }} - {{ selectedKeg.name }}</h3>
      <ul>
        <li>Price: {{ selectedKeg.price }}</li>
        <li>ABV: {{ selectedKeg.abv }}</li>
        <li>IBU: {{ selectedKeg.ibu }}</li>
        <li>Pints Remaining: {{ selectedKeg.pintsRemaining }}</li>
      </ul>
      <br>
      <button (click)="tapButtonClicked()">Tap Keg</button>
      <button (click)="pourButtonClicked()">Pour</button>
      <button (click)="editButtonClicked()">Edit</button>
      <keg-edit [ngClass]="{'hidden': !editKeg}"
          [editKeg]="selectedKeg"
        ></keg-edit>
    </div>
  `
})

export class KegInfoComponent {
  @Input() selectedKeg: Keg;
  @Output() pourClickedSender = new EventEmitter();
  editKeg: boolean = false;
  pourButtonClicked() {
    this.pourClickedSender.emit();
  }
  editButtonClicked() {
    this.editKeg = !this.editKeg;
  }
  tapButtonClicked() {
    this.selectedKeg.status = "tapped";
  }
}
