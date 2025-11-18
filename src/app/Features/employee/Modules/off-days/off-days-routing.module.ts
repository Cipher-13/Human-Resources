import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffDaysComponent } from './off-days.component';

const routes: Routes = [{ path: '', component: OffDaysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffDaysRoutingModule { }
