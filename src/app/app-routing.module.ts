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
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
