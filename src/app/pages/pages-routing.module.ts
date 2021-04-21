import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@trungk18/layout/layout/layout.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { InvestInChaoyangComponent } from './InvestInChaoyang/InvestInChaoyang.component';
import { InvestmentEnvironmentComponent } from './InvestInChaoyang/InvestmentEnvironment/InvestmentEnvironment.component';
import { DailyResidenceComponent } from './LiveInChaoyang/DailyResidence/DailyResidence.component';
import { LiveInChaoyangComponent } from './LiveInChaoyang/LiveInChaoyang.component';
import { AboutChaoyangComponent } from './WhyChaoyang/AboutChaoyang/AboutChaoyang.component';
import { WhyChaoyangComponent } from './WhyChaoyang/WhyChaoyang.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children:[
      { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
      {
        path: 'Homepage',
        component:HomepageComponent,
        data:{
          title:'Homepage',
          
        }
      },
      {
        path: 'WhyChaoyang',  
        data:{
          title:'Why Chaoyang',
        },
        children:[
          {
            path:'WhyChaoyang',
            component:WhyChaoyangComponent,
            data:{
              title:'Overview',
            },
          },
          {
            path:'AboutChaoyang',
            component:AboutChaoyangComponent,
            data:{
              title:'About Chaoyang',
            },
          },
        ]
      },
      {
        path: 'InvestInChaoyang',  
        data:{
          title:'Invest In Chaoyang',
        },
        children:[
          {
            path:'InvestInChaoyang',
            component:InvestInChaoyangComponent,
            data:{
              title:'Overview',
            },
          },
          {
            path:'InvestmentEnvironment',
            component:InvestmentEnvironmentComponent,
            data:{
              title:'Investment Environment',
            },
          },
        ]
      },
      {
        path: 'LiveInChaoyang',  
        data:{
          title:'Live In Chaoyang',
        },
        children:[
          {
            path:'LiveInChaoyang',
            component:LiveInChaoyangComponent,
            data:{
              title:'Overview',
            },
          },
          {
            path:'DailyResidence',
            component:DailyResidenceComponent,
            data:{
              title:'Daily Residence',
            },
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
