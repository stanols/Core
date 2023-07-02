import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "app/modules/common/services/base.service";
import { AdventureModel } from "../models/adventure.model";

@Injectable()
export class AdventureService extends BaseService {
	constructor(
		private readonly httpClient: HttpClient
	) {
		super("api/Adventure", httpClient);
	}

	public getAdventures(
		cancellationNotifier?: Observable<void>
	): Observable<AdventureModel[]> {
		return super.get<AdventureModel[]>("getAll", cancellationNotifier);
	}
}
