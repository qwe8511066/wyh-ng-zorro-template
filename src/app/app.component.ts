import { Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  constructor(
    public router: Router,
    private _cdr: ChangeDetectorRef,
    private iconService: NzIconService,
  ) {
    this.iconService.fetchFromIconfont({
      scriptUrl: '//at.alicdn.com/t/font_2462412_ezzlcg837e.js'
    });
  }

  handleGoogleAnalytics = (event: any): void => {
    
  };

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }
}
