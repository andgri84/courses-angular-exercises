import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: string, addQuestionMark: boolean = false): string {
    let val =  value.toUpperCase();
    if (addQuestionMark) {
      val += '!';
    }
    return val;
  }

}
