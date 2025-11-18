import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffTimesRoutingModule } from './off-times-routing.module';
import { OffTimesComponent } from './off-times.component';


@NgModule({
  declarations: [
    OffTimesComponent
  ],
  imports: [
    CommonModule,
    OffTimesRoutingModule
  ]
})
export class OffTimesModule { }
