import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { faArrowAltCircleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: "app-registration",
	templateUrl: "./registration.component.html",
	styleUrls: ["./registration.component.scss"],
	standalone: true,
	imports: [
		FormsModule,
	],
})
export class RegistrationComponent implements OnInit {
	FaArrowAltCircleLeft: IconDefinition;

	model: any;

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {
		this.FaArrowAltCircleLeft = faArrowAltCircleLeft;
	}

	ngOnInit(): void {
		this.model = {
			name: null,
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			confirmedPassword: null
		};
	}

	onSignUp(): void {
		const model = this.model;
	}
}
