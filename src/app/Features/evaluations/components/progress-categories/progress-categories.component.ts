import { Component, OnInit } from '@angular/core';
import { Ratings } from './../../../../Core/Interfaces/itable';

const ELEMENT_DATA: Ratings[] = [
  {
    name: 'الحضور والانصراف',
    description: 'متابعة الانضباط الوظيفي ومواعيد العمل',
    status: 'نشط',
    statusClass: 'status-approved',
    createdAt: new Date('2025-10-20')
  },
  {
    name: 'الالتزام',
    description: 'قياس التزام الموظف بسياسات الشركة',
    status: 'غير نشط',
    statusClass: 'status-rejected',
    createdAt: new Date('2025-10-20')
  },
  {
    name: 'الإنتاجية',
    description: 'قياس معدل الإنجاز وجودة العمل',
    status: 'نشط',
    statusClass: 'status-approved',
    createdAt: new Date('2025-10-20')
  }
];

@Component({
  selector: 'app-progress-categories',
  templateUrl: './progress-categories.component.html',
  styleUrls: ['./progress-categories.component.scss']
})
export class ProgressCategoriesComponent implements OnInit {

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
