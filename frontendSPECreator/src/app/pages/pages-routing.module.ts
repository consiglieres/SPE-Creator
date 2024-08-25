import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.page';
import { ProfileComponent } from './profile/profile.page';
import { MainComponent } from './main/main.page';
import { ErrorComponent } from './error/error.page';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'create-portfolio',
        component: CreatePortfolioComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
