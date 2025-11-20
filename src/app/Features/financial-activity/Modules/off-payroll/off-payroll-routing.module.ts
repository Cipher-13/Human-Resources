import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffPayrollComponent } from './off-payroll.component';

const routes: Routes = [{ path: '', component: OffPayrollComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffPayrollRoutingModule { }
