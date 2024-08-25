import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AddUserService {

    constructor(private router: Router){}

    public addUser(email: string, password: string): void {
        if(password.length < 6){
            this.router.navigate(['/sign-up'])
            console.log('OK')
        }
        else{
            alert('Пароль должен содержать минимум 6 символов')
        }
    }
}
