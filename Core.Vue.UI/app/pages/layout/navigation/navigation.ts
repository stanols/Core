import { ref } from 'vue';
import NavigationItemModel from '../../../models/navigation-item.model.ts';

export class Navigation {
	items: NavigationItemModel[];
	activeId = 'home';

	constructor() {
		this.items = [
			{
				id: 1,
				name: 'Adventures',
				icon: 'home',
				route: '/adventures'
			},
			{
				id: 2,
				name: 'Experiences',
				icon: 'settings',
				route: '/experiences'
			},
			{
				id: 3,
				name: 'Group Chat',
				icon: 'user',
				route: '/chat'
			}
		];
	}

	onItemClick(item: any) {
		console.log("Item clicked");
	}
}
