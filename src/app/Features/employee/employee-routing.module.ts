import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { MasterViewComponent } from './Components/master-view/master-view.component';


const routes: Routes = [ //4200/employee/...
  { path: '', component: EmployeeComponent, title: 'Employees Administration' },

  {
    path: 'view',
    component: MasterViewComponent,
    children: [
      {
        path: '', title: 'Employee Profile',
        loadChildren: () =>
          import('./Modules/identity/identity.module').then(
            (m) => m.IdentityModule
          ),
      },
      {
        path: 'bank-account',title: 'Banking Account',
        loadChildren: () =>
          import('./Modules/bank-account/bank-account.module').then(
            (m) => m.BankAccountModule
          ),
      },
      {
        path: 'contracts', title: 'Related Files & Contracts',
        loadChildren: () =>
          import('./Modules/contracts/contracts.module').then(
            (m) => m.ContractsModule
          ),
      },

       {
        path: 'salaries',  title: 'Salaries & Incentives',
        loadChildren: () =>
          import('./Modules/salaries/salaries.module').then(
            (m) => m.SalariesModule
          ),
      },
      {
        path: 'working-hr', title: 'Duty Schedule',
        loadChildren: () =>
          import('./Modules/working-hr/working-hr.module').then(
            (m) => m.WorkingHrModule
          ),
      },
      {
        path: 'offDays', title: 'Vacations',
        loadChildren: () =>
          import('./Modules/off-days/off-days.module').then(
            (m) => m.OffDaysModule
          ),
      },
      {
        path: 'insurance', title: 'Health Insurance',
        loadChildren: () =>
          import('./Modules/insurance/insurance.module').then(
            (m) => m.InsuranceModule
          ),
      },
      {
        path: 'cash-advance', title: 'Cash Custody',
        loadChildren: () =>
          import('./Modules/oath/oath.module').then((m) => m.OathModule),
      },
      {
        path: 'projects', title: 'Assigned Projects',
        loadChildren: () =>
          import('./Modules/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'consequences',title:'Disciplinary actions',
        loadChildren: () =>
          import('./Modules/consequences/consequences.module').then(
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
