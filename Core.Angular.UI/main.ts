import "@angular/localize/init";
import { enableProdMode } from "@angular/core";
import { environment } from "environments/environment";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from 'app/modules/router/app-router.module';
import { provideHttpClient } from '@angular/common/http';

import { importProvidersFrom } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';


export function getBaseUrl(): string {
	return document.getElementsByTagName("base")[0].href;
}

const providers = [
	{
		provide: "BASE_URL",
		useFactory: getBaseUrl,
		deps: []
	},
	provideRouter(routes),
	provideHttpClient(),
	importProvidersFrom(FormsModule),
	provideStore(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }
    ),
	provideEffects([])
];

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(
	AppComponent,
	{
		providers: providers
	})
	.catch(err => console.error(err));
