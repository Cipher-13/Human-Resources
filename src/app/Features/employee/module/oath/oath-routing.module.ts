import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OathComponent } from './oath.component';

const routes: Routes = [{ path: '', component: OathComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OathRoutingModule { }
