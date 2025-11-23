import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
