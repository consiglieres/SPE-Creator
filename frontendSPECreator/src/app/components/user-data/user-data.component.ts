import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadPhotoComponent {
  public img: string = "";

  public ConsolePhoto(): void{
    console.log(this.img)
  }
}
