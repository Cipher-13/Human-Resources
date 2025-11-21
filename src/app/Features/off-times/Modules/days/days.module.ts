import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaysRoutingModule } from './days-routing.module';
import { DaysComponent } from './days.component';


@NgModule({
  declarations: [
    DaysComponent
  ],
  imports: [
    CommonModule,
    DaysRoutingModule
  ]
})
export class DaysModule { }
