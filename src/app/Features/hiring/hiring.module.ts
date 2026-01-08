import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRoutingModule } from './hiring-routing.module';
import { HiringComponent } from './hiring.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    HiringComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    HiringRoutingModule
  ]
})
export class HiringModule { }
