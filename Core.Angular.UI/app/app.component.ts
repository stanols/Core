import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavigationComponent } from "./modules/common/components/layout/navigation/navigation.component";
import { NavigationItem } from "./modules/common/components/layout/navigation/navigation-item/navigation-item.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		RouterLink,

		NavigationComponent,
		NavigationItem
	]
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
