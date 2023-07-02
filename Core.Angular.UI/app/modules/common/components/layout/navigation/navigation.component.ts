import { Component, Input, Output, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { NavigationItemModel } from "app/modules/common/models/navigation-item.model";
import { NavItemDirective } from "app/modules/common/directives/nav-item.directive";
import { NavigationItem } from "./navigation-item/navigation-item.component";

@Component({
	selector: "app-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
	@Input()
	items: NavigationItemModel[] = [];
	activeId: number = -1;
	index: number = 0;

	@ViewChild(NavItemDirective, { static: true }) navItem!: NavItemDirective;

	constructor() {}

	ngOnInit(): void {
		const item = this.items[this.index];
		this.activeId = item.id;

		this.loadComponent(item);
	}

	onItemClick(item: NavigationItemModel): void {
		this.loadComponent(item);
	}

	loadComponent(item: NavigationItemModel): void {
		const viewContainerReference = this.navItem.viewContainerRef;
		viewContainerReference.clear();

		const componentReference = viewContainerReference.createComponent<NavigationItem>(item.model.component);
		componentReference.instance.data = item.model.data;
	}
}
