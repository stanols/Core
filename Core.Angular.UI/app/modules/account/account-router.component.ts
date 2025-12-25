import { Component, OnInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { AuthorizationHelper } from "../common/helpers/authorization.helper";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";

@UntilDestroy()
@Component({
	selector: "app-account",
	templateUrl: "./account-router.component.html",
	standalone: true,
	imports: [
		RouterOutlet,
	],
})
export class AccountRouterComponent implements OnInit {
	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {
	}

	ngOnInit(): void {
		if (AuthorizationHelper.isAuthorized()) {
			this.router.navigate(['/home']);
		}
	}
}
