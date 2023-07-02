import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
	selector: "[navItem]"
})
export class NavItemDirective {
	constructor(public viewContainerRef: ViewContainerRef) {}
}
