import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export const environment = {
	name: "dev",
	production: false,
	apiUrl: "http://localhost:8080",
	version: "1.0.0",
	idleTimeoutInSeconds: 1800,
	tokenExpirationInSeconds: 60,
	devModules: [
		StoreDevtoolsModule.instrument({ maxAge: 50 })
	]
};
