import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { faThList, faTasks } from '@fortawesome/free-solid-svg-icons';
import { NavigationItem } from "app/modules/common/components/layout/navigation/navigation-item/navigation-item.component";
import { NavigationItemModel } from "app/modules/common/models/navigation-item.model";
import { AdventuresComponent } from "app/modules/home/components/home/adventures/adventures.component";
import { ExperiencesComponent } from "app/modules/home/components/home/experiences/experiences.component";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	navItems: NavigationItemModel[];

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {
	}

	ngOnInit(): void {
		this.navItems = [
			{
				id: 1,
				name: "Adventures",
				icon: faThList,
				model: new NavigationItem(
					AdventuresComponent,
					{ title: "Adventures" }
				)
			},
			{
				id: 2,
				name: "Experiences",
				icon: faTasks,
				model: new NavigationItem(
					ExperiencesComponent,
					{ title: "Experiences" }
				)
			}
		] as NavigationItemModel[];
	}
}
