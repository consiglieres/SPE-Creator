import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort-cards',
  templateUrl: './sort-cards.component.html',
  styleUrl: './sort-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortCardsComponent {
  @Input() rates?: string[]
  @Input() names?: string[]
  @Input() languages?: string[]
}
