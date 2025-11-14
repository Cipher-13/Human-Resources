import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { AddEditComponent } from './Components/add-edit/add-edit.component';
import { MasterViewComponent } from './Components/master-view/master-view.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEditComponent,
    MasterViewComponent,
    ],
  imports: [
    CommonModule,
    SharableModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
