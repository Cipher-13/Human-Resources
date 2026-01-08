import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingsComponent } from './meetings.component';
import { MeetingsRoomsComponent } from './Components/meetings-rooms/meetings-rooms.component';
import { MeetingsTypesComponent } from './Components/meetings-types/meetings-types.component';
import { MeetingsLecturesComponent } from './Components/meetings-lectures/meetings-lectures.component';
import { MeetingsAttendanceComponent } from './Components/meetings-attendance/meetings-attendance.component';
import { WorkRulesComponent } from './Components/work-rules/work-rules.component';

const routes: Routes = [{
    path: '', // /requests
    component: MeetingsComponent,
    children: [
      {
        path: '',
        redirectTo: 'types',
        pathMatch: 'full'
      },
      {
        path: 'types',
        component: MeetingsTypesComponent,
        data: { title: 'انواع الاجتماعات' }
      },
      {
        path: 'rooms',
        component: MeetingsRoomsComponent,
        data: { title: 'غرف الاجتماعات  ' }
      },
      {
        path: 'lectures',
        component: MeetingsLecturesComponent,
        data: { title: 'محاضرة الاجتماعات' }
      },
      {
        path: 'attend',
        component: MeetingsAttendanceComponent,
        data: { title: 'حضور الاجتماعات ' }
      },
      {
        path: 'rulez',
        component: WorkRulesComponent,
        data: { title: 'بنود العمل ' }
      },
        ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
