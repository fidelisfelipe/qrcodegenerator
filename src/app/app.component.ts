import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QR Code Generator';
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'www.google.com';
}
