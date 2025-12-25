import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
	selector: "[navItem]",
	standalone: true
})
export class NavItemDirective {
	constructor(public viewContainerRef: ViewContainerRef) {}
}
