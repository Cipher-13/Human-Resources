import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OriginalComponent } from './original.component';

const routes: Routes = [{ path: '', component: OriginalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OriginalRoutingModule { }
