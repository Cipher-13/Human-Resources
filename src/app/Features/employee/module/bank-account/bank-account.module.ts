import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { AddEditComponent } from './Components/add-edit/add-edit.component';


@NgModule({
  declarations: [
    BankAccountComponent,
    AddEditComponent,
   ],
  imports: [
    CommonModule,
    SharableModule,
    BankAccountRoutingModule
  ]
})
export class BankAccountModule { }
