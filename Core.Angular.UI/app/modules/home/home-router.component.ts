import { Component, AfterViewInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
	selector: "app-home",
	templateUrl: "./home-router.component.html"
})
export class HomeRouterComponent implements AfterViewInit {
	ngAfterViewInit(): void { }
}
