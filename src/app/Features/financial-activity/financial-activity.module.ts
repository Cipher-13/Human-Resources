import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialActivityRoutingModule } from './financial-activity-routing.module';
import { FinancialActivityComponent } from './financial-activity.component';


@NgModule({
  declarations: [
    FinancialActivityComponent
  ],
  imports: [
    CommonModule,
    FinancialActivityRoutingModule
  ]
})
export class FinancialActivityModule { }
