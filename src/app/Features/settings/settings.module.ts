import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { InfoComponent } from './Components/info/info.component';
import { AccessibilitiesComponent } from './Components/accessibilities/accessibilities.component';
import { TradeMarkComponent } from './Components/trade-mark/trade-mark.component';
import { EmailComponent } from './Components/email/email.component';
import { ChangePassComponent } from './Components/change-pass/change-pass.component';
import { PolicyComponent } from './Components/policy/policy.component';


@NgModule({
  declarations: [
    SettingsComponent,
    InfoComponent,
    AccessibilitiesComponent,
    TradeMarkComponent,
    EmailComponent,
    ChangePassComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
