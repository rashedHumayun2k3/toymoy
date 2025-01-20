import { createAction, props } from '@ngrx/store';
import { ProductItem } from '../../models/product.model';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ data: ProductItem[] }>()
);