import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffTimesComponent } from './off-times.component';

const routes: Routes = [{ path: '', component: OffTimesComponent ,title:'Off-Times Administration'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffTimesRoutingModule { }
