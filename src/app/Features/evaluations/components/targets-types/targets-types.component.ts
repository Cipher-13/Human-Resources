import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ratings } from 'src/app/Core/Interfaces/itable';

// Declare Bootstrap for modal manipulation
declare var bootstrap: any;

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
export class TargetsTypesComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'description',
    'status',
    'createdAt',
    'actions'
  ];

  dataSource: Ratings[] = ELEMENT_DATA;
  targetTypeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.targetTypeForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: ['نشط']
    });
  }

  ngOnInit(): void {}

  onAddClick() {
    this.targetTypeForm.reset({ status: 'نشط' });
  }

  saveTargetType() {
    if (this.targetTypeForm.valid) {
      const newTargetType: Ratings = {
        ...this.targetTypeForm.value,
        statusClass: this.targetTypeForm.value.status === 'نشط' ? 'status-approved' : 'status-rejected',
        createdAt: new Date()
      };

      this.dataSource = [...this.dataSource, newTargetType];

      // Close modal using Bootstrap API
      const modalElement = document.getElementById('addTargetTypeModal');
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }

      console.log('Target Type saved:', newTargetType);
    } else {
      this.targetTypeForm.markAllAsTouched();
    }
  }

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
