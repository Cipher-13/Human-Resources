import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  selectAll = false;

  settings = [
  { label: 'إظهار تفاصيل الإجازات والمغادرات', value: true },
  { label: 'إظهار تفاصيل العمل الإضافي', value: false },
  { label: 'إظهار تفاصيل الدخل والخصم', value: false },
  { label: 'إظهار السجلات المتكررة', value: true },

  { label: 'إظهار تفاصيل الإجازات والمغادرات', value: true },
  { label: 'إظهار تفاصيل العمل الإضافي', value: false },
  { label: 'إظهار تفاصيل الدخل والخصم', value: false },
  { label: 'إظهار السجلات المتكررة', value: true }
];



  fieldsList = [
    { label: 'الرقم الوظيفي', checked: false },
    { label: 'الجنسية', checked: false },
    { label: 'مكان العمل', checked: false },
    { label: 'مكان العمل', checked: false },
    { label: 'مكان العمل', checked: false },
    { label: 'مكان العمل', checked: false },
    { label: 'مكان العمل', checked: false },
    { label: 'مكان العمل', checked: false },
   ];

  columns: any[][] = [];

  constructor() {
    this.splitColumns();
  }

  splitColumns() {
    const columnCount = 6;

    this.columns = Array.from({ length: columnCount }, () =>
      this.fieldsList.map(item => ({ ...item }))
    );
  }

  toggleSelectAll() {
    this.columns.forEach(col =>
      col.forEach(field => (field.checked = this.selectAll))
    );
  }

  onFieldChange() {
    const allChecked = this.columns.every(col =>
      col.every(field => field.checked)
    );

    this.selectAll = allChecked;
  }
}
