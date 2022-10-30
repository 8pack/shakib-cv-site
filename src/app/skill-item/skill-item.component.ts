import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input('skill') skill:String = "";
  @Input('level') level:number = 1;

  max: number = 5;
  fakeArrayRemaining:Array<string> = new Array();

  fakeArray:Array<string> = new Array(this.level);

  constructor() { }

  ngOnInit(): void {
    this.fakeArray = new Array(this.level);
    this.fakeArrayRemaining = new Array(this.max - +this.level);
  }

}
