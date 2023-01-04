import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { environment } from "environments/environment";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
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
