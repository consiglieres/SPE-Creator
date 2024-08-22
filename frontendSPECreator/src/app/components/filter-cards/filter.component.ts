import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICards } from '../../interfaces/cards.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {

  public filters: FormGroup = new FormGroup<ICards>({
    cardName: new FormControl<string>('', {nonNullable: true}),
    cardRate: new FormControl<string>('', {nonNullable: true})
  })

  @Input() names?: string[]
  @Input() rate?: string[]

  public cardFilter(): void{
    console.log('this work')
  }
}
