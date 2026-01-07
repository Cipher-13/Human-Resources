import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender.component';
import { ManagingComponent } from './Components/managing/managing.component';
import { TimeEntryComponent } from './Components/time-entry/time-entry.component';

const routes: Routes = [{
    path: '', component: CalenderComponent, children: [
      {
        path: 'handle',
        component: ManagingComponent,
        data: { title: 'ادارة  التقويم' }
      },
      {
        path: 'entry',
        component: TimeEntryComponent,
        data: { title: 'ادارة ادخال الوقت   ' }
      },

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }
