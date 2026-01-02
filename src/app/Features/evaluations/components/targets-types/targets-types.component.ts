import { Component } from '@angular/core';
import { Ratings } from 'src/app/Core/Interfaces/itable';


const ELEMENT_DATA: Ratings[] = [
  {
    name: 'جودة العمل ',
    description: 'تقليل نسبة الأخطاء في التقارير أو العمليات المنفذة لتصل إلى أقل من 2% خلال الربع السنوي.',
    status: 'نشط',
    statusClass: 'status-approved',
    createdAt: new Date('2025-10-20')
  },
  {
    name: 'انجاز المهام',
    description: 'إنهاء المهام الموكلة للموظف في الوقت المحدد وبالمعايير المطلوبة بنسبة 100%.',
    status: 'غير نشط',
    statusClass: 'status-rejected',
    createdAt: new Date('2025-10-20')
  },
  {
    name: 'جودة العمل',
    description: 'تقليل نسبة الأخطاء في التقارير أو العمليات المنفذة لتصل إلى أقل من 2% خلال الربع السنوي.',
    status: 'نشط',
    statusClass: 'status-approved',
    createdAt: new Date('2025-10-20')
  }
];

@Component({
  selector: 'app-targets-types',
  templateUrl: './targets-types.component.html',
  styleUrls: ['./targets-types.component.scss']
})
export class TargetsTypesComponent {
displayedColumns: string[] = [
    'name',
    'description',
    'status',
    'createdAt',
    'actions'
  ];

  // Now it's just a plain array, not MatTableDataSource
  dataSource: Ratings[] = ELEMENT_DATA;

  ngOnInit(): void {}

  onView(row: Ratings) {
    console.log('View', row);
  }

  onEdit(row: Ratings) {
    console.log('Edit', row);
  }

  onDelete(row: Ratings) {
    console.log('Delete', row);
  }


}
