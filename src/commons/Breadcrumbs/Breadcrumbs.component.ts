import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Breadcrumbs',
  templateUrl: './Breadcrumbs.component.html',
  styleUrls: ['./Breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) {
    console.log(this.activatedRoute)
  }

  ngOnInit() {
  }

}
