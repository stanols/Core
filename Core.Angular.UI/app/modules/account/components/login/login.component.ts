import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { UserService } from "../../services/user.service";
import { UserModel } from "../../models/user.model";
import { AuthorizationHelper } from "app/modules/common/helpers/authorization.helper";
import { firstValueFrom } from "rxjs";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	model: any;

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute,
		private readonly userService: UserService
	) {
	}

	ngOnInit(): void {
		this.model = {
			name: null,
			password: null
		};
	}

	async onSignIn(): Promise<void> {
		const model = this.model;
		const userModel = {
			name: model.name,
			password: model.password
		} as UserModel;

		const data = await firstValueFrom(this.userService.login(userModel));

		AuthorizationHelper.setAuthorizationData(data);

		if (AuthorizationHelper.isAuthorized()) {
			this.router.navigate(['/home']);
		}
	}
}
