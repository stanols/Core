import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavigationItemModel {
	id: number;
	name: string;
	title: string;
	icon: IconDefinition;
	link: string;
	component: any;
}
