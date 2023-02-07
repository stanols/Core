import { Component, AfterViewInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
	selector: "app-account",
	templateUrl: "./account-router.component.html"
})
export class AccountRouterComponent implements AfterViewInit {
	ngAfterViewInit(): void { }
}
