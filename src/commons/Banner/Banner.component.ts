import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() media:String;
  @Input() titles:Array<any>;
  @Input() subTitle:String;
  @Input() desc:String;
  
  constructor() { }

  ngOnInit() {
  }

}
