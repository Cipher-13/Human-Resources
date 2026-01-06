import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { ChoosenPlanComponent } from './Components/choosen-plan/choosen-plan.component';
import { PlanPrerequisitesComponent } from './Components/plan-prerequisites/plan-prerequisites.component';
import { PlanPolicyComponent } from './Components/plan-policy/plan-policy.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    PlansComponent,
    ChoosenPlanComponent,
    PlanPrerequisitesComponent,
    PlanPolicyComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
