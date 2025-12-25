import { Type, Component } from '@angular/core';

@Component({
	selector: "app-navigation-item",
	standalone: true,
})
export class NavigationItem {
	constructor(public component: Type<any>, public data: any) {}
}
