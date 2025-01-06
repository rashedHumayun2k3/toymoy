// src/app/features/products/store/products/products.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './products.actions';

export interface ProductsState {
  products: any[];
  loading: boolean;
  error: any;
}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const _productsReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return _productsReducer(state, action);
}
