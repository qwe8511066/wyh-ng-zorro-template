import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checkArray } from 'src/utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public routerList:Array<any>
  public $list:Array<any>
  constructor(private router:Router) {
    this.routerList = this.router.config[0].children
  }

  ngOnInit(): void {
    this.$list = this.forRouterList(this.routerList,null)
  }

  forRouterList(array:Array<any>,path:String){
    const res = [];
    array.forEach(item=>{
      let $item = {...item} 
      //动态修改子级path 追加起来
      if(path){
        $item.path = path + '/' + $item.path
      }
      if(item.data&&item.data.title){
        res.push($item)
      }
      if (checkArray($item.children)) {
        $item.children = this.forRouterList($item.children,$item.path);
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
