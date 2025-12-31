import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { ManageComponent } from './Components/manage/manage.component';
import { AddtionalDutyComponent } from './Components/addtional-duty/addtional-duty.component';
import { DepartureComponent } from './Components/departure/departure.component';
import { OffDayComponent } from './Components/off-day/off-day.component';
import { ResignationComponent } from './Components/resignation/resignation.component';
import { AdvanceCashComponent } from './Components/advance-cash/advance-cash.component';


@NgModule({
  declarations: [
    RequestsComponent,
    ManageComponent,
    AddtionalDutyComponent,
    DepartureComponent,
    OffDayComponent,
    ResignationComponent,
    AdvanceCashComponent,
  ],
  imports: [
    CommonModule,
    SharableModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
