import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas, faThList, faTasks } from "@fortawesome/free-solid-svg-icons";
import { NgbNavModule, NgbCollapseModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavItemDirective } from './directives/nav-item.directive';
import { BaseCrudService } from './services/base-crud.service';

@NgModule({
	imports: [
		FormsModule,
		RouterModule,
		CommonModule,
		NgbCollapseModule,
		NgbNavModule,
		FontAwesomeModule,
		NgbModule,

		HeaderComponent,
		FooterComponent,
		NavigationComponent,
		NavItemDirective
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		NavigationComponent,
		NavItemDirective
	],
	providers: [
		BaseCrudService
	]
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
