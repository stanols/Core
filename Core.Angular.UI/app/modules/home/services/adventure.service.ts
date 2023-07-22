import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "app/modules/common/services/base.service";
import { AdventureModel } from "../models/adventure.model";

@Injectable({
	providedIn: 'root'
})
export class AdventureService extends BaseService {
	constructor(
		private readonly httpClient: HttpClient
	) {
		super("api/Adventure", httpClient);
	}

	public create(
		data: AdventureModel,
		cancellationNotifier?: Observable<void>
	): Observable<number> {
		return super.post<number>("create", data, cancellationNotifier);
	}

	public getAdventures(
		cancellationNotifier?: Observable<void>
	): Observable<AdventureModel[]> {
		return super.get<AdventureModel[]>("getAll", cancellationNotifier);
	}

	public update(
		data: AdventureModel,
		cancellationNotifier?: Observable<void>
	): Observable<void> {
		return super.put("update", data, cancellationNotifier);
	}

	public remove(
		id: number,
		cancellationNotifier?: Observable<void>
	): Observable<void> {
		return super.delete("remove", id, cancellationNotifier);
	}
}
