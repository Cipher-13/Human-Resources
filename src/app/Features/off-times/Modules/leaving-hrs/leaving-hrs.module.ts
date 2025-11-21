import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavingHrsRoutingModule } from './leaving-hrs-routing.module';
import { LeavingHrsComponent } from './leaving-hrs.component';


@NgModule({
  declarations: [
    LeavingHrsComponent
  ],
  imports: [
    CommonModule,
    LeavingHrsRoutingModule
  ]
})
export class LeavingHrsModule { }
