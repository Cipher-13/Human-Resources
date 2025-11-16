import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-working-hr',
  templateUrl: './working-hr.component.html',
  styleUrls: ['./working-hr.component.scss']
})
export class WorkingHrComponent  implements OnInit {

  selectedDate: string = '';
  
  currentMonth = 8; // September (0-based)
  currentYear = 2025;

  calendarDays: any[] = [];

  get currentMonthName() {
    return new Date(this.currentYear, this.currentMonth).toLocaleString('ar', {
      month: 'long'
    });
  }

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.calendarDays = [];

    // Fill blanks before first day
    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push({ empty: true });
    }

    // Fill actual days
    for (let d = 1; d <= daysInMonth; d++) {
      this.calendarDays.push({
        day: d,
        empty: false,
        events: this.mockEvents(d)
      });
    }
  }

  mockEvents(day: number) {
    const data: any = {
      1: [
        { title: 'تسجيل الحضور', time: '09:02', type: 'in-green' },
        { title: 'تسجيل الانصراف', time: '05:00', type: 'out-green' }
      ],
      7: [
        { title: 'عمل عن بعد', time: '', type: 'remote' }
      ],
      10: [
        { title: 'تسجيل الحضور', time: '09:20', type: 'in-green' },
        { title: 'تسجيل الانصراف', time: '04:32', type: 'out-red' }
      ],
      17: [
        { title: 'إجازة مرضية 🤒', time: '', type: 'sick' }
      ]
    };

    return data[day] || [];
  }
}
