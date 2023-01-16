import { Directive, ElementRef, Input, ViewContainerRef } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Directive({
	selector: "[navItem]"
})
export class NavItemDirective {
	constructor(
		public viewContainerReference: ViewContainerRef
	) {}
}
