import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typewriter-heading',
  templateUrl: './typewriter-heading.component.html',
  styleUrls: ['./typewriter-heading.component.css']
})
export class TypewriterHeadingComponent implements OnInit {

  @Input() typewriter_val: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
