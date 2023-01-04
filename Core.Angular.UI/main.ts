import "@angular/localize/init";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppBrowserModule } from "app/modules/browser/app-browser.module";
import { environment } from "environments/environment";

export function getBaseUrl(): string {
	return document.getElementsByTagName("base")[0].href;
}

const providers = [
	{
		provide: "BASE_URL",
		useFactory: getBaseUrl,
		deps: []
	}
];

if (environment.production) {
	enableProdMode();
}

document.addEventListener("DOMContentLoaded", () => {
	platformBrowserDynamic(providers)
		.bootstrapModule(AppBrowserModule)
		.catch((error) => console.error(error));
});
