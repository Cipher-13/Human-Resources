import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OriginalRoutingModule } from './original-routing.module';
import { OriginalComponent } from './original.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    OriginalComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    OriginalRoutingModule
  ]
})
export class OriginalModule { }
