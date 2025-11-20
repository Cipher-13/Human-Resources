import { Component } from '@angular/core';

@Component({
  selector: 'app-off-payroll',
  templateUrl: './off-payroll.component.html',
  styleUrls: ['./off-payroll.component.scss']
})
export class OffPayrollComponent {
movements: any[] = [];

  constructor() {
    this.generateRandomRows();
  }

  generateRandomRows() {
    const names = ['خالد حسن', 'أحمد علي', 'محمود يوسف', 'سعيد مراد', 'إبراهيم سالم'];
    const types = ['دخل', 'خصم'];
    const movementsNames = ['حوافز ', 'بدل انتقال', 'خصم تأخير', 'مكافأة'];
    const statuses = [
      'تم الإضافة من قسم الموارد البشرية',
      'قيد المراجعة',
      'تم الرفض من المالية'
    ];


    for (let i = 0; i < 5; i++) {
      this.movements.push({
        id: 100 + i,
        employeeName: names[Math.floor(Math.random() * names.length)],
        type: types[Math.floor(Math.random() * types.length)],
        movementName: movementsNames[Math.floor(Math.random() * movementsNames.length)],
        amount: `${Math.floor(Math.random() * 1000) + 200} ر.س`,
        date: `٢٠ سبتمبر ٢٠٢٥`,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        image: 'assets/images/Guset-Avatar.png'
      });
    }
  }

  view(row: any) {
    console.log("عرض:", row);
  }

  edit(row: any) {
    console.log("تعديل:", row);
  }

  delete(row: any) {
    console.log("حذف:", row);
  }

}
