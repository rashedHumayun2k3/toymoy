import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { loadProducts, loadProductsSuccess } from './products.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productsService: ProductsService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      tap(() => console.log('loadProducts action received')), // Debug
      mergeMap(() =>
        this.productsService.getItems().pipe(
          map((products) => loadProductsSuccess({ data: products })),
          catchError((error) => EMPTY),
          tap((products) => console.log('Loaded Products:', products))
        )
      )
    )
  );
}
