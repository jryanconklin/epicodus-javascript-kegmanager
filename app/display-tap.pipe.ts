import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "display_tap",
  pure: false
})

export class DisplayTapPipe implements PipeTransform {
  transform (input: Keg[], info) {
    var output: Keg[] = [];


    for (var i = 1; i <= 8; i++) {
      for (var j = 0; j < input.length; j++) {
        if (input[j].tap == i) {
          output.push(input[j]);
        }
      }
    }

    return output;
  }
}
