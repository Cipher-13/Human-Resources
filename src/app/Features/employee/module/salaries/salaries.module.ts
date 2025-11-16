import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalariesRoutingModule } from './salaries-routing.module';
import { SalariesComponent } from './salaries.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    SalariesComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    SalariesRoutingModule
  ]
})
export class SalariesModule { }
