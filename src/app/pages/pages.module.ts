import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { HomepageComponent } from './Homepage/Homepage.component';
import { WhyChaoyangComponent } from './WhyChaoyang/WhyChaoyang.component';
import { InvestInChaoyangComponent } from './InvestInChaoyang/InvestInChaoyang.component';
import { InvestmentEnvironmentComponent } from './InvestInChaoyang/InvestmentEnvironment/InvestmentEnvironment.component';
import { LiveInChaoyangComponent } from './LiveInChaoyang/LiveInChaoyang.component';
import { DailyResidenceComponent } from './LiveInChaoyang/DailyResidence/DailyResidence.component';
import { BannerComponent } from 'src/commons/Banner/Banner.component';
import { BreadcrumbsComponent } from 'src/commons/Breadcrumbs/Breadcrumbs.component';
import { AboutChaoyangComponent } from './WhyChaoyang/AboutChaoyang/AboutChaoyang.component';

const componentList = [
  HomepageComponent,
  WhyChaoyangComponent,
  InvestInChaoyangComponent,
  InvestmentEnvironmentComponent,
  LiveInChaoyangComponent,
  DailyResidenceComponent,
  AboutChaoyangComponent,
  BreadcrumbsComponent,

  BannerComponent,
]

@NgModule({
  declarations: [...componentList],
  imports: [
    RouterModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
