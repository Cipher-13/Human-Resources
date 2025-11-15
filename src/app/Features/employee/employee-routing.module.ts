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
        path: '', title: 'Employee Profile',
        loadChildren: () =>
          import('./module/identity/identity.module').then(
            (m) => m.IdentityModule
          ),
      },
      {
        path: 'bank-account',title: 'Banking Account',
        loadChildren: () =>
          import('./module/bank-account/bank-account.module').then(
            (m) => m.BankAccountModule
          ),
      },
      {
        path: 'contracts', title: 'Related Files & Contracts',
        loadChildren: () =>
          import('./module/contracts/contracts.module').then(
            (m) => m.ContractsModule
          ),
      },

       {
        path: 'salaries',  title: 'Salaries & Incentives',
        loadChildren: () =>
          import('./module/salaries/salaries.module').then(
            (m) => m.SalariesModule
          ),
      },
      {
        path: 'working-hr', title: 'Duty Schedule',
        loadChildren: () =>
          import('./module/working-hr/working-hr.module').then(
            (m) => m.WorkingHrModule
          ),
      },
      {
        path: 'offDays', title: 'Vacations',
        loadChildren: () =>
          import('./module/off-days/off-days.module').then(
            (m) => m.OffDaysModule
          ),
      },
      {
        path: 'insurance', title: 'Health Insurance',
        loadChildren: () =>
          import('./module/insurance/insurance.module').then(
            (m) => m.InsuranceModule
          ),
      },
      {
        path: 'oath', title: 'Oath',
        loadChildren: () =>
          import('./module/oath/oath.module').then((m) => m.OathModule),
      },
      {
        path: 'projects', title: 'Assigned Projects',
        loadChildren: () =>
          import('./module/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'consequences',title:'Disciplinary actions',
        loadChildren: () =>
          import('./module/consequences/consequences.module').then(
            (m) => m.ConsequencesModule
          ),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
