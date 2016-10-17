import { Component, Input, Output } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-edit',
  template: `
    <div *ngIf="editKeg">
      <div class='form-group'>
        <input class='form-control' type='text' [(ngModel)]="editKeg.name">
        <input class='form-control' type='text' [(ngModel)]="editKeg.brand">
        <input class='form-control' type='number' [(ngModel)]="editKeg.price">
        <input class='form-control' type='number' [(ngModel)]="editKeg.abv">
        <input class='form-control' type='number' [(ngModel)]="editKeg.pintsRemaining">
      </div>
    </div>
  `
})

export class KegEditComponent {
  @Input() editKeg: Keg;
}
