import { Directive, ElementRef, Input } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Directive({
	selector: "[permissions]"
})
export class PermissionsDirective {
	private _appPermissions: string[];
	private _allowedPermissions: string[];

	@Input()
	set permissions(allowedPermissions: string[]) {
		this._allowedPermissions = allowedPermissions;
		this.verifyPermissions();
	}

	constructor(
		private readonly element: ElementRef
	) {
		//TODO: get permissions from cookie or server
		this._appPermissions = [];

		this.verifyPermissions();
	}

	verifyPermissions(): void {
		const isVisible = this._appPermissions
			?.some((x) =>
				this._allowedPermissions
					?.some((y) => y === x)
			);

		this.element.nativeElement.style.display = isVisible ? null : 'none';
	}
}
