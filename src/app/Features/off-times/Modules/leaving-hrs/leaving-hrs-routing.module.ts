import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavingHrsComponent } from './leaving-hrs.component';

const routes: Routes = [{ path: '', component: LeavingHrsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavingHrsRoutingModule { }
