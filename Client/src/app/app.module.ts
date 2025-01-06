// src/app/app.module.ts
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/layouts/app.component';
import { CoreModule } from './components/environments/core/core.module';
import { SharedModule } from './components/shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'; 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ProductsModule,  // Make sure ProductsModule is imported here
    CommonModule,
    StoreModule.forRoot({}, { runtimeChecks: { strictStateSerializability: true, strictActionSerializability: true } }),  // Only for root-level state
    EffectsModule.forRoot([]),  // No global effects in AppModule
    isDevMode() ? StoreDevtoolsModule.instrument() : [],  // DevTools only for dev mode
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
