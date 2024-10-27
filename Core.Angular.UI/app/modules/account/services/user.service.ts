import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "app/modules/common/services/base.service";
import { UserModel } from "../models/user.model";

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
	constructor(
		httpClient: HttpClient
	) {
		super("api/User", httpClient);
	}

	public login(
		model: UserModel,
		cancellationNotifier?: Observable<void>
	): Observable<UserModel> {
		return super.post<UserModel>("login", model, cancellationNotifier);
	}

	public logout(): Observable<void> {
		return super.post("logout");
	}
}
