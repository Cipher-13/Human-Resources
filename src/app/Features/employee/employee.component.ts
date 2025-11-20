import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
 selectedDate: string = '';

  employees: any[] = [];

  constructor() {
    this.generateRandomEmployees();
  }

  generateRandomEmployees() {
    const names = ['كرم سيار', 'أحمد سامي', 'خالد ناصر', 'محمود سالم', 'سارة خالد'];
    const jobs = ['مهندس مدني', 'محاسب', 'فني كهرباء', 'مصممة جرافيك', 'مدير مشروع'];
    const cities = ['الرياض', 'جدة', 'الدمام', 'الخبر', 'مكة'];
    const departments = ['الإنشاءات', 'المالية', 'الصيانة', 'التسويق', 'الإدارة'];
    const sections = ['الهندسة', 'الحسابات', 'الكهرباء', 'التصميم', 'المشاريع'];
    const projects = ['مشروع الأبراج', 'مشروع الإسكان', 'مشروع الجسر', 'مشروع الهوية الجديدة', 'مشروع الصيانة العامة'];

    for (let i = 1; i <= 5; i++) {
      const randomNotifications = Math.floor(Math.random() * 4); // 0–3

      this.employees.push({
        id: 1000 + i,
        iqama: '24578' + Math.floor(Math.random() * 90000),
        employeeName: names[Math.floor(Math.random() * names.length)],
        job: jobs[Math.floor(Math.random() * jobs.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        department: departments[Math.floor(Math.random() * departments.length)],
        section: sections[Math.floor(Math.random() * sections.length)],
        project: projects[Math.floor(Math.random() * projects.length)],
        notifications: randomNotifications,
        image: 'assets/images/Guset-Avatar.png'
      });
    }
  }

  getBadgeClass(notify: number) {
    if (notify === 0) return 'badge bg-success';
    if (notify === 1) return 'badge bg-warning text-dark';
    return 'badge bg-danger';
  }

  getBadgeText(notify: number) {
    if (notify === 0) return 'لا إشعارات';
    if (notify === 1) return 'تنبيه واحد';
    return `${notify} إشعارات`;
  }

}
