import { Component } from '@angular/core';

declare function nextSummary(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shakib Small';
  header: HTMLScriptElement;

  constructor() {

    this.header = document.createElement("script");
    this.header.src = "assets/js/header.js";
    document.body.appendChild(this.header);
  }
}
