import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnInit {
	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {
	}

	ngOnInit(): void {

	}

	async ngAfterViewInit(): Promise<void> {

	}
}
