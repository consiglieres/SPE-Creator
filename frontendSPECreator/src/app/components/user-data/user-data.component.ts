import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadPhotoComponent {
  @Input() public img: string = 'https://avatars.githubusercontent.com/u/98966123?v=4'
  @Input() userName: string = ''
  @Input() email: string = ''
  @Input() portfolioQuantity?: number
  

  public ConsolePhoto(): void{
    console.log(this.img)
  }
}
