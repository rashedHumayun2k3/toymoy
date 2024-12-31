// src/app/app.module.ts
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './layouts/app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ToysModule } from './features/toys/toys.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'; 
import { ToysEffects } from './features/toys/store/toys.effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ToysModule,
   
    EffectsModule.forRoot([ToysEffects]),
    isDevMode() ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
