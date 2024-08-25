import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user.interface';
import { AddUserService } from '../../services/user-services/AddUser.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrl: './log-in.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent {
  public UserData: FormGroup = new FormGroup<IUser>({
    emailUser: new FormControl<string>('', {nonNullable: true, validators: Validators.email}),
    passwordUser: new FormControl<string>('', {nonNullable: true, validators: Validators.minLength(6)})
  }, {validators: [Validators.required]})

  constructor(private AddUserService: AddUserService){}

  protected addUserData(): void{
    const userData = {
      emailUser: this.UserData.controls['emailUser'].value,
      passwordUser: this.UserData.controls['passwordUser'].value
    }
    this.AddUserService.addUser(userData.emailUser, userData.passwordUser)

  }
}
