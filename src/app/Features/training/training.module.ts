import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
