import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { ChoosenPlanComponent } from './Components/choosen-plan/choosen-plan.component';
import { PlanPrerequisitesComponent } from './Components/plan-prerequisites/plan-prerequisites.component';
import { PlanPolicyComponent } from './Components/plan-policy/plan-policy.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { AdvertismentComponent } from './Components/advertisment/advertisment.component';


@NgModule({
  declarations: [
    PlansComponent,
    ChoosenPlanComponent,
    PlanPrerequisitesComponent,
    PlanPolicyComponent,
    AdvertismentComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
