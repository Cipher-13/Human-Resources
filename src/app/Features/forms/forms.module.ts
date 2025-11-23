import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
