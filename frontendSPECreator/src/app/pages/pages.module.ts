import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.page';
import { ErrorComponent } from './error/error.page';
import { RequestsService } from '../services/requests.service';
import { LogInComponent } from './log-in/log-in.page';
import { SignUpComponent } from './sign-up/sign-up.page';
import { ProfileComponent } from './profile/profile.page';
import { RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.page';

@NgModule({
  declarations: [
    MainComponent,
    ErrorComponent,
    LogInComponent,
    SignUpComponent,
    ProfileComponent,
    CreatePortfolioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [
    RequestsService,
  ],
})
export class PagesModule {}
