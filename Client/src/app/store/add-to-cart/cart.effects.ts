import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { CartActions, CartApiActions } from './cart.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CartEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(products => CartApiActions.loadProductsSuccess({ products })),
          catchError(error => of(CartApiActions.loadProductsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}