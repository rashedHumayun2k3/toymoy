// src/app/features/products/store/products/products.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './products.actions';
import { ProductItem } from '../../models/product.model';

export interface ProductsState {
  items: any[];
}

export const initialState: ProductsState = {
  items: [],
};


export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    items: products,
  }))
);