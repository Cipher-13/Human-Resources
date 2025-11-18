import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialActivityComponent } from './financial-activity.component';

const routes: Routes = [{ path: '', component: FinancialActivityComponent ,title:'Financial Administration'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialActivityRoutingModule { }
