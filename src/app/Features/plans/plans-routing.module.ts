import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans.component';
import { ChoosenPlanComponent } from './Components/choosen-plan/choosen-plan.component';
import { PlanPrerequisitesComponent } from './Components/plan-prerequisites/plan-prerequisites.component';
import { PlanPolicyComponent } from './Components/plan-policy/plan-policy.component';

const routes: Routes = [
  {
    path: '', component: PlansComponent, children: [
      {
        path: 'choose',
        component: ChoosenPlanComponent,
        data: { title: 'اختر خطتك' }
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
