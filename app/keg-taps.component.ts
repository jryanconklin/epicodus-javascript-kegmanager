import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-taps',
  template: `
    <h3>Current Taps</h3>
      <div *ngFor="let keg of childKegList | display_tap">
        <p (click)="kegClick(keg)"> {{keg.tap}} - {{keg.name}}  </p>
      </div>



  `
})

export class KegTapsComponent {
  @Input() childKegList: Keg[];

  @Output() selectCurrentKegClick = new EventEmitter();

   kegClick(keg: Keg) {
     this.selectCurrentKegClick.emit(keg);
   }


}
