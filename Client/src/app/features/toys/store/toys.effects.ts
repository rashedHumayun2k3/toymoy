// src/app/features/toys/store/toys.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ToysEffects {

  constructor(private actions$: Actions) {}

  // Define your effects here
  loadToys$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Toys] Load Toys'),
      map(() => ({ type: '[Toys] Load Toys Success' }))
    )
  );

}
