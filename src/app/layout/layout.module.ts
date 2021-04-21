import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

const componentList = [
  LayoutComponent,
  HeaderComponent,
  SidebarComponent
]

@NgModule({
  declarations: [componentList],
  imports: [
    RouterModule,
    CommonModule, 
    SharedModule
  ]
})
export class LayoutModule { }
