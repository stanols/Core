import { Component, OnInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { AuthorizationHelper } from "../common/helpers/authorization.helper";
import { ActivatedRoute, Router } from "@angular/router";

@UntilDestroy()
@Component({
	selector: "app-summary",
	templateUrl: "./summary-router.component.html"
})
export class SummaryRouterComponent implements OnInit {
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
