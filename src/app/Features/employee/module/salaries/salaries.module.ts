import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalariesRoutingModule } from './salaries-routing.module';
import { SalariesComponent } from './salaries.component';


@NgModule({
  declarations: [
    SalariesComponent
  ],
  imports: [
    CommonModule,
    SalariesRoutingModule
  ]
})
export class SalariesModule { }
