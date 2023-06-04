import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "app/modules/account/services/user.service";
import { AuthorizationHelper } from "app/modules/common/helpers/authorization.helper";
import { firstValueFrom } from "rxjs";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
	firstName: string;

	constructor(
		private readonly userService: UserService,
		private readonly router: Router
	) {
	}

	ngOnInit(): void {
		const authorizationData = AuthorizationHelper.getAuthorizationData();
		this.firstName = authorizationData.firstName;
	}

	async onLogout(): Promise<void> {
		await firstValueFrom(this.userService.logout());

		AuthorizationHelper.removeAuthorizationData();
		this.router.navigate(['/account']);
	}
}
