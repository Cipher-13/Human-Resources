import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ratings } from 'src/app/Core/Interfaces/itable';

declare var bootstrap: any;

@Component({
  selector: 'app-emp-targets',
  templateUrl: './emp-targets.component.html',
  styleUrls: ['./emp-targets.component.scss']
})
export class EmpTargetsComponent {

  dataSource: Ratings[] = [];
  empTargets: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empTargets = this.fb.group({
      employee: ['', Validators.required],
      targetType: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      targetValue: ['', Validators.required],
      progress: [0, Validators.required],
      status: ['نشط']
    });
  }

  onAddClick() {
    this.empTargets.reset({
      status: 'نشط',
      progress: 0
    });
  }

  saveCategory() {
    if (this.empTargets.invalid) {
      this.empTargets.markAllAsTouched();
      return;
    }

    const newTarget: Ratings = {
      ...this.empTargets.value,
      statusClass:
        this.empTargets.value.status === 'نشط'
          ? 'status-approved'
          : 'status-rejected',
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newTarget];

    bootstrap.Modal.getInstance(
      document.getElementById('addCategoryModal')
    )?.hide();
  }

  onView(row: Ratings) {}
  onEdit(row: Ratings) {}
  onDelete(row: Ratings) {}
}
