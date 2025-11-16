import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkingHrRoutingModule } from './working-hr-routing.module';
import { WorkingHrComponent } from './working-hr.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    WorkingHrComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    WorkingHrRoutingModule
  ]
})
export class WorkingHrModule { }
