// src/app/features/products/products.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsReducer } from '../../store/products/products.reducer';
import { ProductsEffects } from '../../store/products/products.effects';
import { NgPipesModule } from 'ngx-pipes';
import { ProductListComponent } from '../products/product-list/product-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', ProductsReducer),  
    EffectsModule.forFeature([ProductsEffects]),  
    NgPipesModule,
    ProductListComponent
  ],
})
export class ProductsModule { }
