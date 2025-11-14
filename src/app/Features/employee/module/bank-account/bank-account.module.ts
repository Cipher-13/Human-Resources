import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';


@NgModule({
  declarations: [
    BankAccountComponent,
   ],
  imports: [
    CommonModule,
    SharableModule,
    BankAccountRoutingModule
  ]
})
export class BankAccountModule { }
