import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-project-previews',
  templateUrl: './show-project-previews.component.html',
  styleUrls: ['./show-project-previews.component.css']
})
export class ShowProjectPreviewsComponent implements OnInit {

  @Input("web_array") web_array:Array<string> = [];
  @Input("mobile_array") mobile_array:Array<string> = [];
  @Input("other_array") other_array:Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
