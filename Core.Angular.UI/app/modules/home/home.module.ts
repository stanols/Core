import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../common/components/layout/footer/footer.component';
import { HeaderComponent } from '../common/components/layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRouterComponent } from './home-router.component';
import { HomeRouterModule } from './home-router.module';

@NgModule({
	declarations: [
		HomeRouterComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		NgbCollapseModule,
		RouterModule,
		HomeRouterModule,
		CommonModule
	],
	providers: []
})
export class HomeModule { }
