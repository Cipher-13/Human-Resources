import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityComponent } from './identity.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    IdentityComponent,
  ],
  imports: [
    CommonModule,
    SharableModule,
    IdentityRoutingModule
  ]
})
export class IdentityModule { }
