import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const selectProductsFeature  = createFeatureSelector<ProductsState>('products'); 
export const selectAllProducts = createSelector(
  selectProductsFeature ,
  (state: ProductsState) => state.items
);