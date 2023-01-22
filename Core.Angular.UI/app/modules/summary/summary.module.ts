import { NgModule } from "@angular/core";
import { AppCommonModule } from "../common/common.module";
import { RouterModule } from "@angular/router";
import { SummaryComponent } from "./components/summary/summary.component";
import { SummaryRouterComponent } from "./summary-router.component";
import { SummaryRouterModule } from "./summary-router.module";

@NgModule({
	imports: [
		AppCommonModule,
		RouterModule,
		SummaryRouterModule
	],
	declarations: [
		SummaryRouterComponent,
		SummaryComponent
	],
	providers: []
})
export class SummaryModule {}
