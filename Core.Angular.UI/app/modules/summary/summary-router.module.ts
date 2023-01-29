import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SummaryRouterComponent } from "./summary-router.component";
import { SummaryComponent } from "./components/summary/summary.component";

const routes: Routes = [
	{
		path: "",
		component: SummaryRouterComponent,
		children: [
			{
				path: "",
				component: SummaryComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SummaryRouterModule { }
