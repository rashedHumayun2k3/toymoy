// src/app/features/products/products.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from '../../store/products/products.reducer';
import { ProductsEffects } from '../../store/products/products.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productReducer),  
    EffectsModule.forFeature([ProductsEffects]),  
  ],
})
export class ProductsModule { }
