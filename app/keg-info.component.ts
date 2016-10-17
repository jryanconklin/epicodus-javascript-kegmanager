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
        <li>Pints Remaining: {{ selectedKeg.pintsRemaining }}</li>
      </ul>
      <br>
      <button (click)="pourButtonClicked()">Pour</button>
      <button (click)="editButtonClicked()">Edit</button>
      <keg-edit
          [editKeg]="editKeg"
        ></keg-edit>
    </div>
  `
})

export class KegInfoComponent {
  @Input() selectedKeg: Keg;
  @Output() pourClickedSender = new EventEmitter();
  editKeg: Keg = null;
  pourButtonClicked() {
    this.pourClickedSender.emit();
  }
  editButtonClicked() {
    if (this.editKeg === null) {
      this.editKeg = this.selectedKeg;
    } else {
      this.editKeg = null;
    }

  }
}
