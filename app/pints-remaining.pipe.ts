import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "pints_remaining",
  pure: false
})

export class PintsRemainingPipe implements PipeTransform {
  transform (input: Keg[], info) {
    if (info === "lowKegs") {
      // then we filter
      var output: Keg[] = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsRemaining <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }

  }
}
