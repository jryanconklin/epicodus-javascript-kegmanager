import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "display_option",
  pure: false
})

export class DisplayOptionPipe implements PipeTransform {
  transform (input: Keg[], info) {
    var output: Keg[] = [];
    if (info === "lowKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsRemaining <= 10 && input[i].pintsRemaining > 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (info === "empty") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsRemaining <= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (info === "untapped") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].status === "untapped") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }

  }
}
