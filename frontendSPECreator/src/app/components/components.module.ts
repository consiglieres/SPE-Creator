import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SortCardsComponent } from './sort-cards/sort-cards.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    CardComponent,
    SortCardsComponent,
    FooterComponent,
    FilterComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    SortCardsComponent,
    FooterComponent,
    FilterComponent,
  ],
  providers: [],
})
export class ComponentsModule {}
