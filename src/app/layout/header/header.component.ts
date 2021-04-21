import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checkArray } from 'src/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public routerList:Array<any>
  public $list:Array<any>
  constructor(private router:Router) {
    this.routerList = this.router.config[0].children
  }

  ngOnInit(): void {
    this.$list = this.forRouterList(this.routerList)
    console.log(this.$list)
  }

  forRouterList(array:Array<any>){
    const res = [];
    array.forEach(item=>{
      let $item = {...item}
      $item.icon = null
      if(item.path){
        res.push($item)
      }
      if (checkArray($item.children)) {
        $item.children = this.forRouterList($item.children);
      } 
    })
    return res;
  }

  hasChildren(item): boolean {
    if (item.children && item.children.length > 0) {
        return true;
    }
    return false;
}

}
