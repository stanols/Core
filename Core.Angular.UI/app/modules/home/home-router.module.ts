import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HomeRouterComponent } from "./home-router.component";

const routes: Routes = [
    {
        path: "",
        component: HomeRouterComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouterModule {}
