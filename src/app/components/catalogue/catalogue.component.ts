import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, from, Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent{

  constructor(private readonly catalogueService: ApiService) {
    this.products$ = this.catalogueService.getProducts();
  }

  productFilter: string='';

  products$: Observable<Product[]>;

  changeProductFilter(newFilter: string) {
    this.productFilter=newFilter;
  }
}
