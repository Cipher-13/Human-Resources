import { Resignation } from './../../../../Core/Interfaces/itable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var bootstrap: any;

const ELEMENT_DATA: Resignation[] = [];

@Component({
  selector: 'app-resignation',
  templateUrl: './resignation.component.html',
  styleUrls: ['./resignation.component.scss']
})
export class ResignationComponent implements OnInit {

  dataSource: Resignation[] = ELEMENT_DATA;
  indicatorForm: FormGroup;

  // Example employees list
  employees = [
    { id: 1, name: 'أحمد إيهاب' },
    { id: 2, name: 'محمد علي' },
    { id: 3, name: 'سارة حسن' }
  ];

  constructor(private fb: FormBuilder) {
    this.indicatorForm = this.fb.group({
      employeeId: ['', Validators.required],
      resignationDate: ['', Validators.required],
      lastWorkingDay: ['', Validators.required],
      noticePeriod: ['', [Validators.required, Validators.min(1)]],
      reason: ['', Validators.required],
      status: ['قيد المراجعة', Validators.required],
      document: ['']
    });
  }

  ngOnInit(): void {}

  onAddClick(): void {
    this.indicatorForm.reset({
      status: 'قيد المراجعة'
    });
  }

  saveIndicator(): void {
    if (this.indicatorForm.valid) {
      const selectedEmployee = this.employees.find(emp => emp.id === this.indicatorForm.value.employeeId);

      const newEntry: Resignation = {
        ...this.indicatorForm.value,
        employeeName: selectedEmployee?.name,
        createdAt: new Date()
      };

      this.dataSource = [...this.dataSource, newEntry];

      // Close modal
      const modalElement = document.getElementById('addResignationModal');
      const modalInstance = bootstrap?.Modal.getInstance(modalElement);
      modalInstance?.hide();

      console.log('Resignation saved:', newEntry);

    } else {
      this.indicatorForm.markAllAsTouched();
    }
  }

  onView(row: Resignation): void {
    console.log('View', row);
  }

  onEdit(row: Resignation): void {
    this.indicatorForm.patchValue({
      employeeId: row.employeeId,
      resignationDate: row.resignationDate,
      lastWorkingDay: row.lastWorkingDay,
      noticePeriod: row.noticePeriod,
      reason: row.reason,
      status: row.status,
      document: row.document
    });

    // Open modal
    const modalElement = document.getElementById('addResignationModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  onDelete(row: Resignation): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
    console.log('Deleted', row);
  }
}
