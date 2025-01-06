import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { selectCart, selectCartTotal } from '../../store/add-to-cart/cart.selectors';
import { CartActions } from '../../store/add-to-cart/cart.actions';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ReadonlyArray<Product>>;
  cartTotal$: Observable<number>;

  constructor(private store: Store) {
    this.cart$ = this.store.select(selectCart);
    this.cartTotal$ = this.store.select(selectCartTotal);
  }

  ngOnInit(): void {}

  onRemoveFromCart(productId: string) {
    this.store.dispatch(CartActions.removeProduct({ productId }));
  }

  onQuantityChange(event: Event, productId: string) {
    const inputElement = event.target as HTMLInputElement;
    let quantity = parseInt(inputElement.value, 10);

    this.store.dispatch(CartActions.updateQuantity({ productId, quantity }));
  }
}
