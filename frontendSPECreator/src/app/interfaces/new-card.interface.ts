import { FormControl } from "@angular/forms";

export interface INewCard {
  cardName: FormControl<string>
  description: FormControl<string>
  file: FormControl<string>
}