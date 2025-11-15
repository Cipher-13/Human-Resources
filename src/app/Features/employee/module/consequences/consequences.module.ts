import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsequencesRoutingModule } from './consequences-routing.module';
import { ConsequencesComponent } from './consequences.component';


@NgModule({
  declarations: [
    ConsequencesComponent
  ],
  imports: [
    CommonModule,
    ConsequencesRoutingModule
  ]
})
export class ConsequencesModule { }
