import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://www.w3schools.com/howto/img_mountains.jpg';

  constructor() {
    // before render
    // not run asyncs process
    // run once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    // before render
    // run asyncs process, fetch APIs, etc..
    // run once time
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before -- during render
    // changes inputs -- many times like be required
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete component
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log('log hijo!');
    this.loaded.emit(this.img);
  }
}
