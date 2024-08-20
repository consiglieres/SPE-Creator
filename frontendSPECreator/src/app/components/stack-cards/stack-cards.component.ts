import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { IUser } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stack-cards',
  templateUrl: './stack-cards.component.html',
  styleUrl: './stack-cards.component.scss'
})
export class StackCardsComponent {
  public observableCards$?: Observable<IUser[]>;

  constructor(private _requestService: RequestsService){}

  ngOnInit(): void {
    this.observableCards$ = this._requestService.getDataUser()
  }
}
