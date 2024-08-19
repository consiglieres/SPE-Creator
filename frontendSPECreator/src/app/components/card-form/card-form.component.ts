import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICard } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.scss'
})
export class CardFormComponent {

  public dataCard: FormGroup = new FormGroup<ICard>({
    cardName: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
    file: new FormControl<string>('', {nonNullable: true})
  })

  public SendCard(): void {
    let cardName: string = this.dataCard.controls['cardName'].value
    let description: string = this.dataCard.controls['description'].value
    let file: string = this.dataCard.controls['file'].value
    console.log(cardName, description, file)
  }
}
