import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-info',
  template: `
    <h3>{{ selectedKeg.brand }} - {{ selectedKeg.name }}</h3>
    <ul>
      <li>Price: {{ selectedKeg.price }}</li>
      <li>ABV: {{ selectedKeg.abv }}</li>
      <li>Pints Remaining: {{ selectedKeg.pintsRemaining }}</li>
    </ul>
    <br>
    <button (click)="pourButtonClicked()">Pour</button>
  `
})

export class KegInfoComponent {
  @Input() selectedKeg: Keg;
  @Output() pourClickedSender = new EventEmitter();
  pourButtonClicked() {
    this.pourClickedSender.emit();
  }
}
