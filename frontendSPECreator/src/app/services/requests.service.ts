import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsService {
  public data: IUser[] = [];
  protected URL: string = 'http://127.0.0.1:3000'

  constructor(private _httpClient: HttpClient) {}

  public getDataUser(): void{
    // this._httpClient.get<IUser[]>(this.URL).subscribe(value => {
    //   console.log(value)
    //   this.data = value;
    // });
  }

  public sendDataUser(){
    setInterval(() => this._httpClient.post('http://127.0.0.1:3000', {"name": "Dima", "password": "0000"}).subscribe().unsubscribe(), 5000)
    
  }
}
