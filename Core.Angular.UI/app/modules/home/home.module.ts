import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HomeRouterComponent } from "./home-router.component";
import { HomeRouterModule } from "./home-router.module";
import { AppCommonModule } from "../common/common.module";

@NgModule({
	imports: [
		AppCommonModule,
		RouterModule,
		HomeRouterModule
	],
	declarations: [
		HomeRouterComponent,
		HomeComponent
	],
	providers: []
})
export class HomeModule {}
