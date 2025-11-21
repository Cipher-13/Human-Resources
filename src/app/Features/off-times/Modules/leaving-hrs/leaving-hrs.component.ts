import { Component } from '@angular/core';

@Component({
  selector: 'app-leaving-hrs',
  templateUrl: './leaving-hrs.component.html',
  styleUrls: ['./leaving-hrs.component.scss']
})
export class LeavingHrsComponent {
movements: any[] = [];

  constructor() {
    this.generateRandomRows();
  }

  generateRandomRows() {
    const names = ['خالد حسن', 'أحمد علي', 'محمود يوسف', 'سعيد مراد', 'إبراهيم سالم'];
    const types = ['دخل', ];
    const movementsNames = ['مرتب شهري'];
    const statuses = [
      'تم الإضافة من قسم الموارد البشرية',
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
