import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], type?: string): any {
    switch (type) {
      case 'Active':
        return value.filter(item => !item.done);

      case 'Completed':
      return value.filter(item => item.done);

      default:
        return value;
    }
  }

}
