import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { faThList, faTasks, faComment } from '@fortawesome/free-solid-svg-icons';
import { NavigationItem } from "app/modules/common/components/layout/navigation/navigation-item/navigation-item.component";
import { NavigationItemModel } from "app/modules/common/models/navigation-item.model";
import { AdventuresComponent } from "app/modules/home/components/home/adventures/adventures.component";
import { ExperiencesComponent } from "app/modules/home/components/home/experiences/experiences.component";
import { ChatComponent } from "./chat/chat.component";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "app/modules/common/components/layout/header/header.component";
import { FooterComponent } from "app/modules/common/components/layout/footer/footer.component";
import { NavigationComponent } from "app/modules/common/components/layout/navigation/navigation.component";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	standalone: true,
	imports: [
		CommonModule,
		HeaderComponent,
		FooterComponent,
		NavigationComponent,
		NavigationItem,
		NgbNavModule
	],
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
			},
			{
				id: 3,
				name: "Group Chat",
				icon: faComment,
				model: new NavigationItem(
					ChatComponent,
					{ title: "Chat" }
				)
			}
		] as NavigationItemModel[];
	}
}
