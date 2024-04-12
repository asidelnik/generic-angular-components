import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
} from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    CommonModule,
    MatProgressSpinnerModule,
  ],
};
