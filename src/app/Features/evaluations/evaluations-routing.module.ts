import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvaluationsComponent } from './evaluations.component';
import { ProgressLvlsComponent } from './components/progress-lvls/progress-lvls.component';
import { ProgressCategoriesComponent } from './components/progress-categories/progress-categories.component';
import { TargetsTypesComponent } from './components/targets-types/targets-types.component';
import { EmpTargetsComponent } from './components/emp-targets/emp-targets.component';
import { ReviewCycleComponent } from './components/review-cycle/review-cycle.component';
import { EmpReviewsComponent } from './components/emp-reviews/emp-reviews.component';


const routes: Routes = [
  {
    path: '', // /evaluations
    component: EvaluationsComponent,
    children: [
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      },
      {
        path: 'categories',
        component: ProgressCategoriesComponent,
        data: { title: 'فئات مؤشر الأداء' }
      },
      {
        path: 'indicators',
        component: ProgressLvlsComponent,
        data: { title: 'مؤشرات الأداء' }
      },
      {
        path: 'goal-types',
        component: TargetsTypesComponent,
        data: { title: 'أنواع الأهداف' }
      },
      {
        path: 'employee-goals',
        component: EmpTargetsComponent,
        data: { title: 'أهداف الموظفين' }
      },
      {
        path: 'review-cycles',
        component: ReviewCycleComponent,
        data: { title: 'دورات المراجعة' }
      },
      {
        path: 'reviews',
        component: EmpReviewsComponent,
        data: { title: 'مراجعات الموظفين' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationsRoutingModule {}
