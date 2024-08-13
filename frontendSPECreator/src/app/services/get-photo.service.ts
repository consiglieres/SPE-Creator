import { Injectable, Input } from '@angular/core';

@Injectable()
export class NameService {
  @Input() src!:string
}