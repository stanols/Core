import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../common/components/layout/footer/footer.component';
import { HeaderComponent } from '../common/components/layout/header/header.component';
import { NavigationComponent } from '../common/components/layout/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRouterComponent } from './home-router.component';
import { HomeRouterModule } from './home-router.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faThList, faTasks } from '@fortawesome/free-solid-svg-icons';

@NgModule({
	declarations: [
		HomeRouterComponent,
		HomeComponent,
		HeaderComponent,
		NavigationComponent,
		FooterComponent
	],
	imports: [
		NgbCollapseModule,
		RouterModule,
		CommonModule,
		FontAwesomeModule,
		HomeRouterModule
	],
	providers: []
})
export class HomeModule {
	constructor(library: FaIconLibrary) {
		library.addIconPacks(fas);
		library.addIcons(
			faThList,
			faTasks
		);
	}
}
