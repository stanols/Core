import { Component } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { Router } from "@angular/router";

@UntilDestroy()
@Component({
	selector: "app-menu",
	templateUrl: "./menu.component.html",
	styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
	constructor(
		private readonly router: Router
	) {

	}

	signOut(): void {
		//TODO: signout logic
	}
}
