import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HomeRouterComponent } from "./home-router.component";
import { HomeRouterModule } from "./home-router.module";
import { AppCommonModule } from "../common/common.module";
import { UserService } from "../account/services/user.service";
import { AdventuresComponent } from "./components/home/adventures/adventures.component";
import { ExperiencesComponent } from "./components/home/experiences/experiences.component";

@NgModule({
	imports: [
		AppCommonModule,
		RouterModule,
		HomeRouterModule
	],
	declarations: [
		HomeRouterComponent,
		HomeComponent,
		AdventuresComponent,
		ExperiencesComponent
	],
	providers: [
		UserService
	]
})
export class HomeModule {}
