import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffTimesComponent } from './off-times.component';

const routes: Routes = [
  {
    path: '',
    component: OffTimesComponent,
    children: [
      {path:'', redirectTo:'days', pathMatch:'full'},

      {
        path: 'days',title:'Days-Off',
        loadChildren: () =>import('./Modules/days/days.module').then((m) => m.DaysModule),
      },

      {
        path: 'leaving-hrs',title:'Departure Hours',
        loadChildren: () =>import('./Modules/leaving-hrs/leaving-hrs.module').then((m) => m.LeavingHrsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffTimesRoutingModule {}
