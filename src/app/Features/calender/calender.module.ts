import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { ManagingComponent } from './Components/managing/managing.component';
import { TimeEntryComponent } from './Components/time-entry/time-entry.component';


@NgModule({
  declarations: [
    CalenderComponent,
    ManagingComponent,
    TimeEntryComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    CalenderRoutingModule
  ]
})
export class CalenderModule { }
