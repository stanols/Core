import { Component, OnInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { ActivatedRoute } from "@angular/router";

@UntilDestroy()
@Component({
	selector: "app-not-found",
	templateUrl: "./not-found.component.html",
	styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent implements OnInit {
	constructor(
		private readonly route: ActivatedRoute
	) {
	}

	ngOnInit(): void {}
}