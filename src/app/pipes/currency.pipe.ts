import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})

export class CurrencyPipe implements PipeTransform {
  transform(value: any, currencyString: string): any {
    const splitedValue = value.split('.');
    splitedValue[1] = splitedValue[1].slice(0, 2);
    return splitedValue.join('.') + ' ' + currencyString;
  }

}
