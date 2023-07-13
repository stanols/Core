import { Component, OnInit } from "@angular/core";
import { AdventureModel } from "app/modules/home/models/adventure.model";
import { AdventureService } from "app/modules/home/services/adventure.service";
import { firstValueFrom } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AdventureComponent } from "./adventure/adventure.component";

@Component({
	selector: "app-adventures",
	templateUrl: "./adventures.component.html",
	styleUrls: ["./adventures.component.scss"]
})
export class AdventuresComponent implements OnInit {
	adventures: AdventureModel[];

	constructor(
		private readonly modalService: NgbModal,
		private readonly adventureService: AdventureService
	) {
	}

	async ngOnInit(): Promise<void> {
		const adventures = await firstValueFrom(this.adventureService.getAdventures());

		this.adventures = adventures;
	}

	onCreate(): void {
		const modalReference = this.modalService.open(AdventureComponent);

		modalReference.componentInstance.title = "Adventure";
	}
}
