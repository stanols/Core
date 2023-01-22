import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-summary",
	templateUrl: "./summary.component.html",
	styleUrls: [ "./summary.component.scss" ]
})
export class SummaryComponent implements OnInit {
	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {

	}

	ngOnInit(): void {}
}