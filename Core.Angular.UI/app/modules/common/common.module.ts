import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas, faThList, faTasks } from "@fortawesome/free-solid-svg-icons";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
	imports: [
		FormsModule,
		RouterModule,
		CommonModule,
		NgbCollapseModule,
		NgbNavModule,
		FontAwesomeModule
	],
	declarations: [
		HeaderComponent,
		FooterComponent,
		NavigationComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		NavigationComponent
	],
	providers: []
})
export class AppCommonModule {
	constructor(library: FaIconLibrary) {
		library.addIconPacks(fas);
		library.addIcons(
			faThList,
			faTasks
		);
	}
}
