// src/app/features/products/store/products/products.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './products.actions';
import { ProductItem } from '../../models/product.model';

export interface ProductsState {
  items: any[]; // Adjust state to match usage
}

export const initialState: ProductsState = {
  items: [],
};


export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { data }) => ({
    ...state,
    items: data,
  }))
);