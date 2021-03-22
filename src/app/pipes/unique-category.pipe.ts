import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.models';

@Pipe({
  name: 'uniqueCategory'
})
export class UniqueCategoryPipe implements PipeTransform {

  transform(value: Item[]): string[] {
// .indeksOf("shoes") -0 indeksOf on kõige esimene kord, kui ta tuleb kasutusele
// .indeksOf("shoes") - 0
// .indeksOf("beer") -2 jne // 0,1,2,3,4,5.... 0=0 , 1 !=0, 2==2, 3 !=0, 4 !=2, 5==5
// value = muutuv väärtus index - järjekorra number

    return value.map(item => item.category).
    filter((value, index, array)=>
    array.indexOf(value) == index);
  }
}
