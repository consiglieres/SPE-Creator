import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrl: './main.page.scss',
})
export class MainComponent{
  protected user = {"name": "Dima", "password": "0000"}

  constructor(private _getData: RequestsService) {}

  public PrintUser(): void {
    this._getData.sendDataUser();
  }
}
