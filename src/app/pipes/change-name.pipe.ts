import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeName'
})
export class ChangeNamePipe implements PipeTransform {

  transform(value: any,  string1: string, string2: string): string {
    let result = string1 + " " + string2;
    return result;
  }

}
