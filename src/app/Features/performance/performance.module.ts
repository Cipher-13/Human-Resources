import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    PerformanceComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    PerformanceRoutingModule
  ]
})
export class PerformanceModule { }
