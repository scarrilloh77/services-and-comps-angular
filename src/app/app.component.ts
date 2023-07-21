import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  onLoaded(img: string) {
    console.log('log padre!', img);
  }
  toggleImg() {
    this.showImg = !this.showImg;
  }
}

//https://www.w3schools.com/w3css/img_avatar3.png
