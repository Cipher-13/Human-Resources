import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './requests.component';
import { ManageComponent } from './Components/manage/manage.component';
import { AddtionalDutyComponent } from './Components/addtional-duty/addtional-duty.component';
import { DepartureComponent } from './Components/departure/departure.component';
import { OffDayComponent } from './Components/off-day/off-day.component';
import { ResignationComponent } from './Components/resignation/resignation.component';
import { AdvanceCashComponent } from './Components/advance-cash/advance-cash.component';

const routes: Routes = [
  {
    path: '', // /requests
    component: RequestsComponent,
    children: [
      {
        path: '',
        redirectTo: 'handle',
        pathMatch: 'full'
      },
      {
        path: 'handle',
        component: ManageComponent,
        data: { title: 'إدارة الطلبات' }
      },
      {
        path: 'overloading',
        component: AddtionalDutyComponent,
        data: { title: 'طلب عمل إضافي' }
      },
      {
        path: 'leave',
        component: DepartureComponent,
        data: { title: 'طلب مغادرة' }
      },
      {
        path: 'off',
        component: OffDayComponent,
        data: { title: 'طلب اجازة ' }
      },
      {
        path: 'out',
        component: ResignationComponent,
        data: { title: 'طلب استقالة' }
      },
      {
        path: 'cash',
        component: AdvanceCashComponent,
        data: { title: 'طلب سلفة' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule {}
