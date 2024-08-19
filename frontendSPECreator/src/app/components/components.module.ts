import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SortCardsComponent } from './sort-cards/sort-cards.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { UploadPhotoComponent } from './user-data/user-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [
    CardComponent,
    SortCardsComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent,
    UploadPhotoComponent,
    CardFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CardComponent,
    SortCardsComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent,
    UploadPhotoComponent,
    CardFormComponent
  ],
  providers: [],
})
export class ComponentsModule {}
