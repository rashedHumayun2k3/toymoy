import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductItem } from '../../models/product.model';
import { CartItemComponent } from '../cart/cart-item/cart-item.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit(): void {}

  onRemoveFromCart(productId: string) {
  }

  onQuantityChange(event: Event, productId: string) {
    const inputElement = event.target as HTMLInputElement;
    let quantity = parseInt(inputElement.value, 10);

  }
}
