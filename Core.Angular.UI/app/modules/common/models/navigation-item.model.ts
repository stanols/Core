import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { NavigationItem } from "../components/layout/navigation/navigation-item/navigation-item.component";

export interface NavigationItemModel {
	id: number;
	name: string;
	icon: IconDefinition;
	model: NavigationItem;
}
