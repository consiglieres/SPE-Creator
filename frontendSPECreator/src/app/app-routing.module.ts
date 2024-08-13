import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.page';
import { ErrorComponent } from './pages/error/error.page';
import { LogInComponent } from './pages/log-in/log-in.page';
import { SignUpComponent } from './pages/sign-up/sign-up.page';
import { ProfileComponent } from './pages/profile/profile.page';
import { CreatePortfolioComponent } from './pages/create-portfolio/create-portfolio.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
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
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'create-portfolio',
    component: CreatePortfolioComponent
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
