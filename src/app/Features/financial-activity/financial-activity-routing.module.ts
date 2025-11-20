import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialActivityComponent } from './financial-activity.component';

const routes: Routes = [
  {
    path: '',component: FinancialActivityComponent,

    children: [
      {path:'', redirectTo:'payroll', pathMatch:'full'},

      {
        path: 'payroll',title: 'Payroll Administration',
        loadChildren: () =>  import('./Modules/payroll/payroll.module').then((m) => m.PayrollModule)
      },

      {
        path: 'off-payroll',title: 'Non-Payroll Administration',
        loadChildren: () =>import('./Modules/off-payroll/off-payroll.module').then( (m) => m.OffPayrollModule)
      },
    ],
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialActivityRoutingModule {}
