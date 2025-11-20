import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialActivityRoutingModule } from './financial-activity-routing.module';
import { FinancialActivityComponent } from './financial-activity.component';
import { AddEditComponent } from './Components/add-edit/add-edit.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';

@NgModule({
  declarations: [
    FinancialActivityComponent,
    AddEditComponent,
  ],
  imports: [
    SharableModule,
    CommonModule,
    FinancialActivityRoutingModule
  ]
})
export class FinancialActivityModule { }
