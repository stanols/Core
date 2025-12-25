import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { AppCommonModule } from "../common/common.module";
import { AccountRouterComponent } from "./account-router.component";
import { AccountRouterModule } from "./account-router.module";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { UserService } from "./services/user.service";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AppCommonModule,
		RouterModule,
		AccountRouterModule,
		FontAwesomeModule,

		AccountRouterComponent,
		LoginComponent,
		RegistrationComponent
	],
	providers: [
		UserService
	],
	exports: [
		UserService
	]
})
export class AccountModule {
	constructor(library: FaIconLibrary) {
		library.addIconPacks(fas);
		library.addIcons(
			faArrowAltCircleLeft
		);
	}
}
