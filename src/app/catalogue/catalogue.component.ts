import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, from, Observable} from "rxjs";
import {CatalogueService} from "./catalogue.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent{

  constructor(private readonly catalogueService: CatalogueService) {
    this.products$ = this.catalogueService.getProducts();
  }
  products$: Observable<Product[]>;
  productFilter: string="";
}
