import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffDaysRoutingModule } from './off-days-routing.module';
import { OffDaysComponent } from './off-days.component';


@NgModule({
  declarations: [
    OffDaysComponent
  ],
  imports: [
    CommonModule,
    OffDaysRoutingModule
  ]
})
export class OffDaysModule { }
