import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-swap',
  template: `
    <div *ngFor="let keg of parentKegData[0] | display_option:'untapped'">
      <p *ngIf="parentKegData[1]" (click)="kegClicked(keg)">{{ keg.name }}</p>
    </div>
  `
})

export class KegSwapComponent {
  @Input() parentKegData;
  @Output() kegSwapClickedSender = new EventEmitter();
  kegClicked(keg: Keg) {
    alert(keg.name);
    this.kegSwapClickedSender.emit(keg);
  }

}
