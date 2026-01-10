import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OriginalRoutingModule } from './original-routing.module';
import { OriginalComponent } from './original.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { OriginDashComponent } from './Components/origin-dash/origin-dash.component';
import { OriginalsComponent } from './Components/originals/originals.component';
import { OriginalsTypesComponent } from './Components/originals-types/originals-types.component';
import { DiscountComponent } from './Components/discount/discount.component';


@NgModule({
  declarations: [
    OriginalComponent,
    OriginDashComponent,
    OriginalsComponent,
    OriginalsTypesComponent,
    DiscountComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    OriginalRoutingModule
  ]
})
export class OriginalModule { }
