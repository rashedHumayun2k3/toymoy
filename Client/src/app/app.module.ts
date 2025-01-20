// src/app/app.module.ts
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './components/environments/core/core.module';
import { SharedModule } from './components/shared/shared.module';
//import { ProductsModule } from './components/products/products.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'; 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './router/app.routes';
import { CartModule } from './components/cart/cart.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { counterReducer } from './store/counter/counter.reducer';
import { ProductsModule } from './components/products/products.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: counterReducer }),
    EffectsModule.forRoot([]),
    CoreModule,
    SharedModule,
    CartModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    ProductsModule,
    isDevMode() ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
