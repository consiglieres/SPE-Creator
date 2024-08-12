import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrl: './log-in.page.scss'
})
export class LogInComponent {
  public UserData: FormGroup = new FormGroup<IUser>({
    emailUser: new FormControl<string>('', {nonNullable: true, validators: Validators.email}),
    passwordUser: new FormControl<string>('', {nonNullable: true, validators: Validators.minLength(6)})
  }, {validators: [Validators.required]})

  

  public CheckUserData(): void{
    let emailUser: string = this.UserData.controls['emailUser'].value;
    let passwordUser: string = this.UserData.controls['passwordUser'].value;
    console.log(emailUser, passwordUser)
  }
}
