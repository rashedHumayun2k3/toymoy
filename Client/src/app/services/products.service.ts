import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductItem } from '../models/product.model';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //private apiUrl = `${environment.apiUrl}/products`;
  constructor() {}
  getProducts(): Observable<ProductItem[]> {
    console.log('Fetching products...');
    return of([
      {
        id: '1',
        name: 'Product 1',
        image: 'image1.jpg',
        newPrice: 100,
        oldPrice: 120, // Optional
        discount: '20%', // Optional
        manufacturer: 'Manufacturer 1',
        manufacturerLink: 'http://example.com/manufacturer1',
        stars: ['⭐', '⭐', '⭐', '⭐'], // Array of stars
        link: 'http://example.com/product1',
        sticker: 'New Arrival',
        quantity: 100,
      },
      {
        id: '2',
        name: 'Product 2',
        image: 'image2.jpg',
        newPrice: 150,
        manufacturer: 'Manufacturer 2',
        manufacturerLink: 'http://example.com/manufacturer2',
        stars: ['⭐', '⭐', '⭐'], // Fewer stars
        link: 'http://example.com/product2',
        sticker: 'Best Seller',
        quantity: 200,
      },
    ]);
  }
}
