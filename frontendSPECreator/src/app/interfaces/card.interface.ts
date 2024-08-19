import { FormControl } from "@angular/forms";

export interface ICard {
  cardName: FormControl<string>
  description: FormControl<string>
  file: FormControl<string>

}