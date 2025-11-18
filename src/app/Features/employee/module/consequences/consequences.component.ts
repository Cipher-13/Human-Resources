import { Component } from '@angular/core';

@Component({
  selector: 'app-consequences',
  templateUrl: './consequences.component.html',
  styleUrls: ['./consequences.component.scss']
})
export class ConsequencesComponent {
   // عدد الأعمدة الفاضية
  emptyColumns = Array(4).fill(null);

  // بيانات المشاريع
  projects = [
    {
      name: 'رمح',
      task: 'فرونت اند الموقع',
      logo: 'assets/images/rumh-project.png',
      department: 'البرمجة',
      tasksCount: 5,
      status: 'completed',
      statusText: 'مكتمل'
    },
    {
      name: 'افاق السبل',
      task: 'واجهات الموقع',
      logo: 'assets/images/afaq-Project.png',
      department: 'البرمجة',
      tasksCount: 3,
      status: 'in-progress',
      statusText: 'قيد التنفيذ'
    },
    {
      name: 'عناية',
      task: 'واجهات التطبيق',
      logo: 'assets/images/einya-project.png',
      department: 'البرمجة',
      tasksCount: 3,
      status: 'in-progress',
      statusText: 'قيد التنفيذ'
    }
  ];

}
