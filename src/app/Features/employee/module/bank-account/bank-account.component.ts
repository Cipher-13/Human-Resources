import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent {
banks = [
  {
    name: 'CIB',
    branch: 'الثورة',
    account: '12345',
    iban: '78945',
    salaryRate: 'المرتب كامل'
  },
  {
    name: 'مصر',
    branch: 'المعادي',
    account: '78945',
    iban: '123456',
    salaryRate: 'المرتب كامل'
  }
];
}
