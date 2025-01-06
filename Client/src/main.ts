import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/components/layouts/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
