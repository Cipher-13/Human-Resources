import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent {

  emptyCols = Array(3);

projects = [
  {
    name: 'تأمين صحي',
    start: '6/11/2025',
    end: '6/11/2026',
    deduction: '24$',
    status: 'completed',
    statusText: 'مكتمل'
  },
  {
    name: 'تأمين صحي 2',
    start: '1/1/2026',
    end: '1/1/2027',
    deduction: '30$',
    status: 'in-progress',
    statusText: 'قيد التنفيذ'
  }
];

}
