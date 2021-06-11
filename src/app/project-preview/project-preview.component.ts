import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {

  @Input() title:string ="";
  @Input() desc:string ="";
  @Input() tags:string ="";
  @Input() imgsrc:string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
