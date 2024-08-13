import { FormControl } from "@angular/forms";

export interface IGetNewUser {
  emailUser: FormControl<string>;
  passwordUser: FormControl<string>;
  confirmPasswordUser: FormControl<string>;
}