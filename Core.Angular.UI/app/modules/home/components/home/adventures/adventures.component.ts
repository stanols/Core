import { Component, OnInit } from "@angular/core";
import { AdventureModel } from "app/modules/home/models/adventure.model";
import { AdventureService } from "app/modules/home/services/adventure.service";
import { firstValueFrom } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AdventureComponent } from "./adventure/adventure.component";
import { AuthorizationHelper } from "app/modules/common/helpers/authorization.helper";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-adventures",
	templateUrl: "./adventures.component.html",
	styleUrls: ["./adventures.component.scss"],
	standalone: true,
	imports: [
		CommonModule
	],
})
export class AdventuresComponent implements OnInit {
	adventures: AdventureModel[];

	constructor(
		private readonly modalService: NgbModal,
		private readonly adventureService: AdventureService
	) {
	}

	async ngOnInit(): Promise<void> {
		await this.refreshAdventures();
	}

	async refreshAdventures(): Promise<void> {
		const adventures = await firstValueFrom(this.adventureService.getAdventures());

		this.adventures = adventures;
	}

	async onCreate(): Promise<void> {
		const { result, model } = await this.showAdventureModal(
			{
				name: '',
				description: '',
				startsOn: null,
				endsOn: null
			});

		if (result) {
			const authorizationData = AuthorizationHelper.getAuthorizationData();
			const request = {
				...model,
				startsOn: (new Date(Date.UTC(model.startsOn.year, model.startsOn.month - 1, model.startsOn.day))).toISOString(),
				endsOn: (new Date(Date.UTC(model.endsOn.year, model.endsOn.month - 1, model.endsOn.day))).toISOString(),
				createdById: authorizationData.id
			};

			await firstValueFrom(this.adventureService.create(request));
		}

		await this.refreshAdventures();
	}

	async onEdit(adventure: any): Promise<void> {
		const { result, model } = await this.showAdventureModal(adventure);

		if (result) {
			const authorizationData = AuthorizationHelper.getAuthorizationData();
			const request = {
				...model,
				startsOn: (new Date(Date.UTC(model.startsOn.year, model.startsOn.month - 1, model.startsOn.day))).toISOString(),
				endsOn: (new Date(Date.UTC(model.endsOn.year, model.endsOn.month - 1, model.endsOn.day))).toISOString(),
				createdById: authorizationData.id
			};

			await firstValueFrom(this.adventureService.update(request));
		}

		await this.refreshAdventures();
	}

	async onRemove(id: number): Promise<void> {
		await firstValueFrom(this.adventureService.remove(id));

		await this.refreshAdventures();
	}

	async showAdventureModal(model: any): Promise<{ result: boolean, model: any }> {
		const modalReference = this.modalService.open(AdventureComponent);

		modalReference.componentInstance.title = "Adventure";
		modalReference.componentInstance.data = model;

		return await modalReference.result;
	}
}
