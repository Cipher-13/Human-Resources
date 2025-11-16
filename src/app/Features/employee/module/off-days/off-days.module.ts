import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffDaysRoutingModule } from './off-days-routing.module';
import { OffDaysComponent } from './off-days.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    OffDaysComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    OffDaysRoutingModule
  ]
})
export class OffDaysModule { }
