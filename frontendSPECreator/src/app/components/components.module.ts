import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SortCardsComponent } from './sort-cards/sort-cards.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    SortCardsComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink
  ],
  exports: [
    CardComponent,
    SortCardsComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent
  ],
  providers: [],
})
export class ComponentsModule {}
