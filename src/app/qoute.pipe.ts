import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'qoute'
})
export class QoutePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
