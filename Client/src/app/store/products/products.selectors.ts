// src/app/features/products/store/products/products.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { ProductItem } from '../../models/product.model';

export interface ProductFeatureState {
  productItems: ProductItem[],
  numberOfItems: number
}
export const selectProductsState = (state: ProductFeatureState)=>state;

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: any | undefined) => {
    return state?.productItems?.productItems;
  }
);
