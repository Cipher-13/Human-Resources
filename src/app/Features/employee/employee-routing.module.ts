import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { MasterViewComponent } from './Components/master-view/master-view.component';

//4200/em/...
const routes: Routes = [
  { path: '', component: EmployeeComponent, title: 'Managing Employees' },
  {
    path: 'view',
    component: MasterViewComponent,
    children: [

      {
        path: '',title: 'Employee Profile',
        loadChildren: () => import('./module/identity/identity.module')
                          .then(m => m.IdentityModule)
      },
      {
        path: 'bank-account',title: 'Banking Account',
        loadChildren: () => import('./module/bank-account/bank-account.module')
                          .then(m => m.BankAccountModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
