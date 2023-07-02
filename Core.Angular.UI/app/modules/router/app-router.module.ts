import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { NotFoundComponent } from "app/modules/common/components/not-found/not-found.component";
import { AuthorizationHelper } from "../common/helpers/authorization.helper";

const routes: Routes = [
	{
		path: "",
		redirectTo: AuthorizationHelper.isAuthorized() ? "home" : "account",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: () => import("../home/home.module").then((x) => x.HomeModule)
	},
	{
		path: "summary",
		loadChildren: () => import("../summary/summary.module").then((x) => x.SummaryModule)
	},
	{
		path: "account",
		loadChildren: () => import("../account/account.module").then((x) => x.AccountModule)
	},
	
	{
		path: "**",
		component: NotFoundComponent
	}
];

const config = {
	initialNavigation: "enabledBlocking", // 'disabled' | 'enabledBlocking' | 'enabledNonBlocking'
	relativeLinkResolution: "legacy",
	scrollPositionRestoration: `top`,
	useHash: true,
} as ExtraOptions;

@NgModule({
	imports: [
		RouterModule.forRoot(routes, config)
	],
	exports: [
		RouterModule
	]
})
export class AppRouterModule { }
