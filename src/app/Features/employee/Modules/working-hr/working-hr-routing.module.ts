import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingHrComponent } from './working-hr.component';

const routes: Routes = [{ path: '', component: WorkingHrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingHrRoutingModule { }
