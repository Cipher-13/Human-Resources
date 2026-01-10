import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training.component';
import { TrainingTypesComponent } from './Components/training-types/training-types.component';
import { TrainingProgramsComponent } from './Components/training-programs/training-programs.component';
import { TrainingCoursesComponent } from './Components/training-courses/training-courses.component';
import { EmpTrainingComponent } from './Components/emp-training/emp-training.component';

const routes: Routes = [{
    path: '', component: TrainingComponent, children: [
      {
        path: 'types',
        component: TrainingTypesComponent,
        data: { title: 'لوحة تحكم الاحالات' }
      },
      {
        path: 'programs',
        component: TrainingProgramsComponent,
        data: { title: 'طلبات الدفع   ' }
      },
      {
        path: 'course',
        component: TrainingCoursesComponent,
        data: { title: ' المستخدمون المرجعون  ' }
      },
      {
        path: 'em-train',
        component: EmpTrainingComponent,
        data: { title: ' المستخدمون المرجعون  ' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
