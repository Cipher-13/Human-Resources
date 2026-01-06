import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans.component';
import { ChoosenPlanComponent } from './Components/choosen-plan/choosen-plan.component';
import { PlanPrerequisitesComponent } from './Components/plan-prerequisites/plan-prerequisites.component';
import { PlanPolicyComponent } from './Components/plan-policy/plan-policy.component';
import { AdvertismentComponent } from './Components/advertisment/advertisment.component';

const routes: Routes = [
  {
    path: '', component: PlansComponent, children: [
      {
        path: 'choose',
        component: ChoosenPlanComponent,
        data: { title: 'الخطط ' }
      },
      {
        path: 'requirements',
        component: PlanPrerequisitesComponent,
        data: { title: 'متطلبات الخطة  ' }
      },
      {
        path: 'orders',
        component: PlanPolicyComponent,
        data: { title: ' اوامر الخطة ' }
      },
      {
        path: 'advertising',
        component: AdvertismentComponent,
        data: { title: '  الاعلانات ' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
