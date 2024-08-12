import { FormControl } from "@angular/forms";

export interface IUser {
  emailUser: FormControl<string>;
  passwordUser: FormControl<string>;
}
