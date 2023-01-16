import { Component } from "@angular/core";
import { NavigationItemModel } from "app/modules/common/models/navigation-item.model";
import { faThList, faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: "app-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent {
	items: NavigationItemModel[];
	active: NavigationItemModel;

	constructor() {
		this.items = this.getNavigationItems();
	}

	onItemClick($event, item): void {
		this.active = item;
	}

	getNavigationItems(): NavigationItemModel[] {
		const items = [
			{
				id: 1,
				name: "adventures",
				title: "Adventures",
				icon: faThList
			},
			{
				id: 2,
				name: "experiences",
				title: "Experiences",
				icon: faTasks
			}
		] as NavigationItemModel[];

		this.active = items[0];

		return items;
	}
}
