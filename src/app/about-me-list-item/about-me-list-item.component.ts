import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-me-list-item',
  templateUrl: './about-me-list-item.component.html',
  styleUrls: ['./about-me-list-item.component.css']
})
export class AboutMeListItemComponent implements OnInit {

  @Input('title') title:string = "";
  @Input('school') school:string = "";
  @Input('date') date:string = "";
  @Input('desc') desc:unknown  = "";

  constructor() {}

  ngOnInit(): void {}

}
