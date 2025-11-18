import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsequencesRoutingModule } from './consequences-routing.module';
import { ConsequencesComponent } from './consequences.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    ConsequencesComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    ConsequencesRoutingModule
  ]
})
export class ConsequencesModule { }
