import { Component, AfterViewInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
	selector: "app-summary",
	templateUrl: "./summary-router.component.html"
})
export class SummaryRouterComponent implements AfterViewInit {
	ngAfterViewInit(): void { }
}
