import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    MeetingsRoutingModule
  ]
})
export class MeetingsModule { }
