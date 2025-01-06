import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './router/app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productsReducer } from './store/products/products.reducer';
import { cartReducer } from './store/add-to-cart/cart.reducer';
import { provideHttpClient } from '@angular/common/http';
import { CartEffects } from './store/add-to-cart/cart.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      products: productsReducer,
      cart: cartReducer
    }),
    provideHttpClient(),
    provideEffects([CartEffects])
  ],
  //providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideStore(), provideEffects(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
