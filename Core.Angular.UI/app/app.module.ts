import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { AppRouterModule } from "./modules/router/app-router.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http"
import { AppInitService } from "app-init.service";
import { environment } from "environments/environment";

@NgModule({
	imports: [
		FormsModule,
		BrowserModule,
		AppRouterModule,
		RouterModule,
		HttpClientModule,
		StoreModule.forRoot(
			{
			},
			{
				runtimeChecks: {
					strictStateImmutability: false,
					strictActionImmutability: false
				}
			}
		),
		EffectsModule.forRoot([]),
		...environment.devModules,
		AppComponent
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: (startupClass: AppInitService) => () =>
				startupClass.initApplication(),
			deps: [
				AppInitService
			],
			multi: true
		},
		AppInitService,
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
