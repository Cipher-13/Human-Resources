import { Component } from '@angular/core';
import { Review } from './../../../../Core/Interfaces/itable';

const ELEMENT_DATA: Review[] = [
  {
    employeeName: 'عمر أحمد',
    reviewerName: 'أحمد هارون',
    reviewCycle: 'التقييم السنوي',
    reviewDate: new Date('2025-10-20'),
    status: 'نشط',
    statusClass: 'status-approved',
    category: 'تقييم أداء عام'
  },
  {
    employeeName: 'عمر أحمد',
    reviewerName: 'أحمد هارون',
    reviewCycle: 'التقييم السنوي',
    reviewDate: new Date('2025-10-20'),
    status: 'غير نشط',
    statusClass: 'status-rejected',
    category: 'تقييم أداء عام'
  },
  {
    employeeName: 'عمر أحمد',
    reviewerName: 'أحمد هارون',
    reviewCycle: 'التقييم السنوي',
    reviewDate: new Date('2025-10-20'),
    status: 'نشط',
    statusClass: 'status-approved',
    category: 'تقييم أداء عام'
  }
];

@Component({
  selector: 'app-emp-reviews',
  templateUrl: './emp-reviews.component.html',
  styleUrls: ['./emp-reviews.component.scss']
})
export class EmpReviewsComponent {
displayedColumns: string[] = [
    'name',
    'description',
    'status',
    'createdAt',
    'actions'
  ];

  // Now it's just a plain array, not MatTableDataSource
  dataSource: Review[] = ELEMENT_DATA;

  ngOnInit(): void {}

  onView(row: Review) {
    console.log('View', row);
  }

  onEdit(row: Review) {
    console.log('Edit', row);
  }

  onDelete(row: Review) {
    console.log('Delete', row);
  }}
