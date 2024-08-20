import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsService {
  protected URL: string = 'http://127.0.0.1:3000'

  constructor(private _httpClient: HttpClient) {}

  public getDataUser(): Observable<IUser[]>{
    return this._httpClient.get<IUser[]>(this.URL)
  }

  public sendDataUser(){
    setInterval(() => this._httpClient.post('http://127.0.0.1:3000', {}).subscribe().unsubscribe(), 5000)
    
  }
}
