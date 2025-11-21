import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffTimesRoutingModule } from './off-times-routing.module';
import { OffTimesComponent } from './off-times.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { AddEditComponent } from './Components/add-edit/add-edit.component';


@NgModule({
  declarations: [
    OffTimesComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    OffTimesRoutingModule
  ]
})
export class OffTimesModule { }
