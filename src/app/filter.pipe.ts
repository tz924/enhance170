import { Pipe, PipeTransform } from '@angular/core';
import { Question } from './app.component';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Question[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.content.toLowerCase().includes(searchText);
    });
  }
}
