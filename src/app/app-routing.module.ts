import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
   {path: '', redirectTo: 'dash', pathMatch: 'full' },
   {path: 'dash', component:DashboardComponent, title: 'Dashboard'},
   { path: 'em', loadChildren: () => import('./Features/employee/employee.module').then(m => m.EmployeeModule),title:'Managing Employees' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
