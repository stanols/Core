import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRouterComponent } from './home-router.component';
import { HomeRouterModule } from './home-router.module';

@NgModule({
    declarations: [
        HomeRouterComponent
    ],
    imports: [
        RouterModule,
        HomeRouterModule
    ],
    providers: []
})
export class HomeModule {}
