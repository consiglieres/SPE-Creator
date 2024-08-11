import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.page';
import { ErrorComponent } from './error/error.page';
import { RequestsService } from '../services/requests.service';

@NgModule({
  declarations: [
    MainComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    RequestsService
  ],
})
export class PagesModule {}
