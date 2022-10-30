import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-page-preview',
  templateUrl: './project-page-preview.component.html',
  styleUrls: ['./project-page-preview.component.css']
})
export class ProjectPagePreviewComponent implements OnInit {

  @Input('sclass') sclass:String = "";
  @Input() title:string ="";
  @Input() desc:string ="";
  @Input() tags:string ="";
  @Input() imgsrc:string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
