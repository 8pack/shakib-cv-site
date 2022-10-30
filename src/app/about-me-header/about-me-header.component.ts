import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-about-me-header',
  templateUrl: './about-me-header.component.html',
  styleUrls: ['./about-me-header.component.css']
})
export class AboutMeHeaderComponent implements OnInit {

  @Input('title') title:String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
