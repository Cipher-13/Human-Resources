import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
   {path: '', redirectTo: 'dash', pathMatch: 'full' },
   {path: 'dash', component:DashboardComponent, title: 'Dashboard'},
   {path: 'auth', loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule) },
   { path: 'employee', loadChildren: () => import('./Features/employee/employee.module').then(m => m.EmployeeModule),},
   { path: 'financial-activity', loadChildren: () => import('./Features/financial-activity/financial-activity.module').then(m => m.FinancialActivityModule) },
   { path: 'off-times', loadChildren: () => import('./Features/off-times/off-times.module').then(m => m.OffTimesModule) },
   { path: 'reports', loadChildren: () => import('./Features/reports/reports.module').then(m => m.ReportsModule) },
   { path: 'forms', loadChildren: () => import('./Features/forms/forms.module').then(m => m.FormsModule) },
   { path: 'settings', loadChildren: () => import('./Features/settings/settings.module').then(m => m.SettingsModule) },
   { path: 'requests', loadChildren: () => import('./Features/requests/requests.module').then(m => m.RequestsModule) },
   { path: 'evaluations', loadChildren: () => import('./Features/evaluations/evaluations.module').then(m => m.EvaluationsModule) },
   { path: 'plans', loadChildren: () => import('./Features/plans/plans.module').then(m => m.PlansModule) },
   { path: 'referral', loadChildren: () => import('./Features/referral/referral.module').then(m => m.ReferralModule) },
   { path: 'calender', loadChildren: () => import('./Features/calender/calender.module').then(m => m.CalenderModule) },
   { path: 'performance', loadChildren: () => import('./Features/performance/performance.module').then(m => m.PerformanceModule) },
   { path: 'meetings', loadChildren: () => import('./Features/meetings/meetings.module').then(m => m.MeetingsModule) },
   { path: 'training', loadChildren: () => import('./Features/training/training.module').then(m => m.TrainingModule) },
   { path: 'original', loadChildren: () => import('./Features/original/original.module').then(m => m.OriginalModule) },
   { path: 'hiring', loadChildren: () => import('./Features/hiring/hiring.module').then(m => m.HiringModule) },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
