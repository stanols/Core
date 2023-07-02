import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HomeRouterComponent } from "./home-router.component";
import { HomeRouterModule } from "./home-router.module";
import { AppCommonModule } from "../common/common.module";
import { UserService } from "../account/services/user.service";
import { AdventuresComponent } from "./components/home/adventures/adventures.component";
import { ExperiencesComponent } from "./components/home/experiences/experiences.component";
import { AdventureService } from "./services/adventure.service";

@NgModule({
	imports: [
		CommonModule,
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
		UserService,
		AdventureService
	]
})
export class HomeModule {}
