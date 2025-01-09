import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {itemAddedSuccess} from "./cart-api.actions";
import {CatalogPageActions} from "../../components/catalog/actions/catalog-page.actions";

@Injectable()
export class CartEffect {

  addItemToCart$ = createEffect(() => this.actions$.pipe(
      ofType(CatalogPageActions.addItemToCart),
      // Call Server via service here
      map(_ => (itemAddedSuccess()))
    )
  );

  constructor(
    private actions$: Actions,
  ) {
  }
}
