import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { NotFoundComponent } from "app/modules/common/components/not-found/not-found.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: () => import("../home/home.module").then((x) => x.HomeModule)
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
