import { Component } from "@angular/core";
import { NavigationItemModel } from "app/modules/common/models/navigation-item.model";

@Component({
	selector: "app-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.componentscss"]
})
export class NavigationComponent {
	items: NavigationItemModel[];

	constructor() {
		this.items = this.getNavigationItems();
	}

	getNavigationItems(): NavigationItemModel[] {
		const items = [
			{
				id: "home",
				name: "Home",
				link: "/home"
			}
		] as NavigationItemModel[];

		return items;
	}
}
