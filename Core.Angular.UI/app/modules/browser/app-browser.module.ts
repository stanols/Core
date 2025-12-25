import { NgModule } from "@angular/core";
import {
	BrowserModule
} from "@angular/platform-browser";
import { AppModule } from "../../app.module";
import { AppComponent } from "../../app.component";

@NgModule({
	imports: [
		AppModule,
		BrowserModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppBrowserModule {}
