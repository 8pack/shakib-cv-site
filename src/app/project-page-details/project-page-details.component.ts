import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-page-details',
  templateUrl: './project-page-details.component.html',
  styleUrls: ['./project-page-details.component.scss']
})
export class ProjectPageDetailsComponent implements OnInit {


  @Input('details') details:String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
