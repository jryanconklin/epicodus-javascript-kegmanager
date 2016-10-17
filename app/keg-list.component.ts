import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let keg of childKegList">
      <p>{{ keg.brand }} - {{ keg.name }}</p>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
