import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { ProductItem } from '../models/product.model';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getItems(): Observable<ProductItem[]> {
    debugger;
    return this.http.get<ProductItem[]>('https://677f9b9e0476123f76a73564.mockapi.io/products');
  }
}
