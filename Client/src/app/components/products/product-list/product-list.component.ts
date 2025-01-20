import { Component, OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../../../models/product.model';
import { loadProducts } from '../../../store/products/products.actions';
import { selectAllProducts } from '../../../store/products/products.selectors';
import { Observable } from 'rxjs';
import { ProductsState } from '../../../store/products/products.reducer';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
})

export class ProductListComponent implements OnInit {
  products$!: Observable<ProductItem[]>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadProducts()); // Dispatch the load action
    this.products$ = this.store.select(selectAllProducts); // Select products from state
  }


   message: string = 'Hello, click the button to see magic!';
   onButtonClick(): void {
    this.message = 'Button clicked! Method executed.';
    console.log('Button clicked!');
  }
}
