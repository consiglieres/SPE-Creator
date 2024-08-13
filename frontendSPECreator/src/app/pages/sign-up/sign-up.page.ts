import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGetNewUser } from '../../interfaces/new-user.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrl: './sign-up.page.scss'
})
export class SignUpComponent {
  public userData: FormGroup = new FormGroup<IGetNewUser>({
    emailUser: new FormControl<string>('', {nonNullable: true, validators: Validators.email}),
    passwordUser: new FormControl<string>('', {nonNullable: true, validators: Validators.email}),
    confirmPasswordUser: new FormControl<string>('', {nonNullable: true, validators: Validators.email})
  }, {validators: Validators.required})


  public SaveUserData(): void{
    let emailUser: string = this.userData.controls['emailUser'].value;
    let passwordUser: string = this.userData.controls['passwordUser'].value;
    let confirmPasswordUser: string = this.userData.controls['confirmPasswordUser'].value;
    console.log(emailUser, passwordUser, confirmPasswordUser)
  }
}
