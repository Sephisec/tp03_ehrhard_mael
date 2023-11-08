import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./models/product";
import {filter, map, Observable} from "rxjs";
@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(values: Observable<Product[]>, ...args: string[]): Observable<Product[]> {
    return values.pipe(map(products =>
    products.filter(p => JSON.stringify(p).toLowerCase().includes(args[0].toLowerCase()))));
  }
}
