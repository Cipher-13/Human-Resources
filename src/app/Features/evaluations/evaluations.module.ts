import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { EvaluationsComponent } from './evaluations.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { ProgressLvlsComponent } from './components/progress-lvls/progress-lvls.component';
import { ProgressCategoriesComponent } from './components/progress-categories/progress-categories.component';
import { TargetsTypesComponent } from './components/targets-types/targets-types.component';
import { EmpTargetsComponent } from './components/emp-targets/emp-targets.component';
import { ReviewCycleComponent } from './components/review-cycle/review-cycle.component';
import { EmpReviewsComponent } from './components/emp-reviews/emp-reviews.component';


@NgModule({
  declarations: [
    EvaluationsComponent,
    ProgressLvlsComponent,
    ProgressCategoriesComponent,
    TargetsTypesComponent,
    EmpTargetsComponent,
    ReviewCycleComponent,
    EmpReviewsComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    EvaluationsRoutingModule
  ]
})
export class EvaluationsModule { }
