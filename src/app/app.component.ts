import { Component } from '@angular/core';

declare function nextSummary(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shakib-cv-site';
  header: HTMLScriptElement;
  scrollout: HTMLScriptElement;

  constructor() {

    this.scrollout = document.createElement("script");
    this.scrollout.src = "../../assets/js/scroll-out.js";
    document.body.appendChild(this.scrollout);

    this.header = document.createElement("script");
    this.header.src = "../../assets/js/header.js";
    document.body.appendChild(this.header);
  }
}
