import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-hey-there',
  templateUrl: './banner-hey-there.component.html',
  styleUrls: ['./banner-hey-there.component.css']
})
export class BannerHeyThereComponent implements OnInit {

  @Input('hey_im') hey_im:String = "";
  @Input('text') text:String = "";
  @Input('bkg') bkg:String = "";
  @Input('bkgposition') bkgposition:String = "";
  @Input('sclass') sclass:String = "";
  @Input('cv_button') cv_button:String = "";
  @Input('link') link:String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
