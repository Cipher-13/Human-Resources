import { Component } from '@angular/core';

@Component({
  selector: 'app-oath',
  templateUrl: './oath.component.html',
  styleUrls: ['./oath.component.scss']
})
export class OathComponent {
custodyList = [
  {
    category: 'اجهزة',
    type: 'تليفون محمول',
    serial: 'xyz130031245',
    startDate: '1 يناير 2025',
    endDate: '1 يناير 2026'
  },
  {
    category: 'اموال',
    type: '1200$',
    serial: '',
    startDate: '1 يناير 2025',
    endDate: ''
  },
  {
    category: 'سيارات',
    type: 'مرسيديس مايباغ',
    serial: '',
    startDate: '1 يناير 2025',
    endDate: '13 ابريل 2028'
  }
];


}
