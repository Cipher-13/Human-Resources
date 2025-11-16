import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OathRoutingModule } from './oath-routing.module';
import { OathComponent } from './oath.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    OathComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    OathRoutingModule
  ]
})
export class OathModule { }
