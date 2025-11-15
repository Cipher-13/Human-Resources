import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkingHrRoutingModule } from './working-hr-routing.module';
import { WorkingHrComponent } from './working-hr.component';


@NgModule({
  declarations: [
    WorkingHrComponent
  ],
  imports: [
    CommonModule,
    WorkingHrRoutingModule
  ]
})
export class WorkingHrModule { }
