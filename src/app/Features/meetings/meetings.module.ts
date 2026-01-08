import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { MeetingsTypesComponent } from './Components/meetings-types/meetings-types.component';
import { MeetingsRoomsComponent } from './Components/meetings-rooms/meetings-rooms.component';
import { MeetingsAttendanceComponent } from './Components/meetings-attendance/meetings-attendance.component';
import { MeetingsLecturesComponent } from './Components/meetings-lectures/meetings-lectures.component';
import { WorkRulesComponent } from './Components/work-rules/work-rules.component';


@NgModule({
  declarations: [
    MeetingsComponent,
    MeetingsTypesComponent,
    MeetingsRoomsComponent,
    MeetingsAttendanceComponent,
    MeetingsLecturesComponent,
    WorkRulesComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    MeetingsRoutingModule
  ]
})
export class MeetingsModule { }
