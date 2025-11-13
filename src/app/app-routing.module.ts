import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
   {path: '', redirectTo: 'dash', pathMatch: 'full' },
   {path: 'dash', component:DashboardComponent, title: 'Dashboard'},
   { path: 'em', loadChildren: () => import('./Features/employee/employee.module').then(m => m.EmployeeModule),title:'Managing Employees'},
   { path: 'auth', loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule) },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
