import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { TrainingTypesComponent } from './Components/training-types/training-types.component';
import { TrainingProgramsComponent } from './Components/training-programs/training-programs.component';
import { TrainingCoursesComponent } from './Components/training-courses/training-courses.component';
import { EmpTrainingComponent } from './Components/emp-training/emp-training.component';


@NgModule({
  declarations: [
    TrainingComponent,
    TrainingTypesComponent,
    TrainingProgramsComponent,
    TrainingCoursesComponent,
    EmpTrainingComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
