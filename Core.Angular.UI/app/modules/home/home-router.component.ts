import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { AuthorizationHelper } from "../common/helpers/authorization.helper";

@UntilDestroy()
@Component({
	selector: "app-home",
	templateUrl: "./home-router.component.html",
	standalone: true,
	imports: [
		RouterOutlet
	],
})
export class HomeRouterComponent implements OnInit {
	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {
	}

	ngOnInit(): void {
		if (!AuthorizationHelper.isAuthorized()) {
			this.router.navigate(['/account']);
		}
	}
}
