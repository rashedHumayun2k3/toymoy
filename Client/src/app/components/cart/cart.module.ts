import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "../../store/cart/cart.reducer";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgPipesModule} from "ngx-pipes";
import {EffectsModule} from "@ngrx/effects";
import {CartEffect} from "../../store/cart/cart.effect";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CartEffect]),
    StoreModule.forFeature('cartFeature', cartReducer),
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgPipesModule,
    MatCardModule
  ]
})
export class CartModule {
}
