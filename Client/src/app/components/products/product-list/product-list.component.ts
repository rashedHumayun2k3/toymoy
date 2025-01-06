import { Component, OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { selectProducts } from '../../../store/add-to-cart/cart.selectors';
import { CartActions } from '../../../store/add-to-cart/cart.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule
  ],
})
export class ProductListComponent implements OnInit {
  //products$: Observable<Product[]>;
  products$!: Observable<ReadonlyArray<Product>>;

  constructor(private store: Store) {
    // Use the selector directly here
    //this.products$ = this.store.select(selectAllProducts);
  }

  // ngOnInit(): void {
  //   // Dispatch action to load products
  //   this.store.dispatch(loadProducts());
  // }

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadProducts()); // Dispatch load products action
    this.products$ = this.store.select(selectProducts); // Select products from the store
  }
  onAddToCart(product: Product) {
    this.store.dispatch(CartActions.addProduct({ product }));
  }
}
