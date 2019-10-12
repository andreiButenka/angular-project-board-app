import { Pipe, PipeTransform } from '@angular/core';
import Card from '../models/Card';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, criterion: string): Card[] {
    return criterion
      ? value.filter((task: { name: string }) => task.name.startsWith(criterion))
      : value;
  }

}
