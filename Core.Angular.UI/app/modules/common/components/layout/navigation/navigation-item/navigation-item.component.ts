import { Type } from '@angular/core';

export class NavigationItem {
	constructor(public component: Type<any>, public data: any) {}
}
