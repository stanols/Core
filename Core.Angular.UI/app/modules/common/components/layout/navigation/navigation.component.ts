import { Component, ViewChild } from "@angular/core";
import { NavigationItemModel } from "app/modules/common/models/navigation-item.model";
import { faThList, faTasks } from '@fortawesome/free-solid-svg-icons';
import { AdventuresComponent } from "app/modules/home/components/home/adventures/adventures.component";
import { ExperiencesComponent } from "app/modules/home/components/home/experiences/experiences.component";

@Component({
	selector: "app-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent {
	items: NavigationItemModel[];
	activeId: number;

	constructor() {
		this.items = this.getNavigationItems();
		this.activeId = this.items[0].id;
	}

	getNavigationItems(): NavigationItemModel[] {
		const items = [
			{
				id: 1,
				name: "adventures",
				title: "Adventures",
				icon: faThList,
				component: AdventuresComponent
			},
			{
				id: 2,
				name: "experiences",
				title: "Experiences",
				icon: faTasks,
				component: ExperiencesComponent
			}
		] as NavigationItemModel[];

		return items;
	}
}
