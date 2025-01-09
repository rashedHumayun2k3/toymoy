import { Component, OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../../../models/product.model';
import { loadProducts } from '../../../store/products/products.actions';
import { ProductFeatureState, selectAllProducts } from '../../../store/products/products.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
})

export class ProductListComponent implements OnInit {
  products$!: Observable<ProductItem[]>;

  constructor(private store: Store<ProductFeatureState>) {
    console.log('constructor called in product list component..');
    this.products$ = this.store.select(selectAllProducts);
  }
   ngOnInit(): void {
    console.log('ngOnInit called in product list component..');
    this.store.dispatch(loadProducts());
   }
   message: string = 'Hello, click the button to see magic!';
   onButtonClick(): void {
    this.message = 'Button clicked! Method executed.';
    console.log('Button clicked!');
  }
}
