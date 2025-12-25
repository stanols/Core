import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { AppCommonModule } from "app/modules/common/common.module";

@Component({
	selector: "app-summary",
	templateUrl: "./summary.component.html",
	styleUrls: [ "./summary.component.scss" ],
	standalone: true,
	imports: [
		CommonModule,
		AppCommonModule,
		RouterModule
	],
})
export class SummaryComponent implements OnInit {
	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {
	}

	ngOnInit(): void {

	}
}