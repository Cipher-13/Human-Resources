import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OathRoutingModule } from './oath-routing.module';
import { OathComponent } from './oath.component';


@NgModule({
  declarations: [
    OathComponent
  ],
  imports: [
    CommonModule,
    OathRoutingModule
  ]
})
export class OathModule { }
