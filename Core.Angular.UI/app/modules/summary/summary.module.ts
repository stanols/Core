import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCommonModule } from "../common/common.module";
import { RouterModule } from "@angular/router";
import { SummaryComponent } from "./components/summary/summary.component";
import { SummaryRouterComponent } from "./summary-router.component";
import { SummaryRouterModule } from "./summary-router.module";
import { UserService } from "../account/services/user.service";

@NgModule({
	imports: [
		CommonModule,
		AppCommonModule,
		RouterModule,
		SummaryRouterModule
	],
	declarations: [
		SummaryRouterComponent,
		SummaryComponent
	],
	providers: [
		UserService
	]
})
export class SummaryModule {}
