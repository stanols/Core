import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountRouterComponent } from "./account-router.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";

const routes: Routes = [
	{
		path: "",
		component: AccountRouterComponent,
		children: [
			{
				path: "",
				redirectTo: "login",
				pathMatch: "full"
			},
			{
				path: "login",
				component: LoginComponent
			},
			{
				path: "registration",
				component: RegistrationComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountRouterModule { }
