import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ratings } from './../../../../Core/Interfaces/itable';

// Declare Bootstrap for modal manipulation if needed via JS
declare var bootstrap: any;

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

  dataSource: Ratings[] = ELEMENT_DATA;
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: ['نشط']
    });
  }

  ngOnInit(): void {}

  onAddClick() {
    this.categoryForm.reset({ status: 'نشط' });
  }

  saveCategory() {
    if (this.categoryForm.valid) {
      const newCategory: Ratings = {
        ...this.categoryForm.value,
        statusClass: this.categoryForm.value.status === 'نشط' ? 'status-approved' : 'status-rejected',
        createdAt: new Date()
      };

      this.dataSource = [...this.dataSource, newCategory];

      const modalElement = document.getElementById('addCategoryModal');
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance.hide();

      console.log('Category saved:', newCategory);
    } else {
      this.categoryForm.markAllAsTouched();
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
