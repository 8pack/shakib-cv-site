import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-subheading',
  templateUrl: './subheading.component.html',
  styleUrls: ['./subheading.component.css']
})
export class SubheadingComponent implements OnInit {

  @Input() subheading_val: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
