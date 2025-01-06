// src/app/features/products/products.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from '../../store/products/products.reducer';
import { ProductsEffects } from '../../store/products/products.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer),  // Register the 'products' feature here
    EffectsModule.forFeature([ProductsEffects]),  // Register effects for the products feature
  ],
})
export class ProductsModule { }
