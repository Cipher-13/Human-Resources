import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OriginalComponent } from './original.component';
import { OriginDashComponent } from './Components/origin-dash/origin-dash.component';
import { OriginalsTypesComponent } from './Components/originals-types/originals-types.component';
import { OriginalsComponent } from './Components/originals/originals.component';
import { DiscountComponent } from './Components/discount/discount.component';
const routes: Routes = [
  {
    path: '',
    component: OriginalComponent,
    children: [
      {
        path: 'origin-types',
        component: OriginalsTypesComponent,
        title: 'Orignials Types ',
      },
      {
        path: 'origins',
        component: OriginalsComponent,
        title: 'Originals ',
      },
    ],
  },

  {
    path: 'origin-dash',
    component: OriginDashComponent,
  },

  {
    path: 'origin-dis',
    component: DiscountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OriginalRoutingModule {}
