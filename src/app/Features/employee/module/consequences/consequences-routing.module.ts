import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsequencesComponent } from './consequences.component';

const routes: Routes = [{ path: '', component: ConsequencesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsequencesRoutingModule { }
