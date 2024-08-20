import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortCardsComponent } from './sort-cards/sort-cards.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { UploadPhotoComponent } from './user-data/user-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { StackCardsComponent } from './stack-cards/stack-cards.component';
import { RateComponent } from './rate/rate.component';

@NgModule({
  declarations: [
    SortCardsComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent,
    UploadPhotoComponent,
    CardFormComponent,
    StackCardsComponent,
    RateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SortCardsComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent,
    UploadPhotoComponent,
    CardFormComponent,
    StackCardsComponent
  ],
  providers: [],
})
export class ComponentsModule {}
