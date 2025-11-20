import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffPayrollRoutingModule } from './off-payroll-routing.module';
import { OffPayrollComponent } from './off-payroll.component';


@NgModule({
  declarations: [
    OffPayrollComponent
  ],
  imports: [
    CommonModule,
    OffPayrollRoutingModule
  ]
})
export class OffPayrollModule { }
