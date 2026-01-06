import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralRoutingModule } from './referral-routing.module';
import { ReferralComponent } from './referral.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { UsersComponent } from './Components/users/users.component';


@NgModule({
  declarations: [
    ReferralComponent,
    DashboardComponent,
    PaymentComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    ReferralRoutingModule
  ]
})
export class ReferralModule { }
