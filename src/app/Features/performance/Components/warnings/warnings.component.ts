import { Resignation } from './../../../../Core/Interfaces/itable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var bootstrap: any;

const ELEMENT_DATA: Resignation[] = [];

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.scss']
})
export class WarningsComponent implements OnInit {

  dataSource: Resignation[] = ELEMENT_DATA;
  indicatorForm: FormGroup;

  employees = [
    { id: 1, name: 'أحمد إيهاب' },
    { id: 2, name: 'محمد علي' },
    { id: 3, name: 'سارة حسن' }
  ];

  constructor(private fb: FormBuilder) {
    this.indicatorForm = this.fb.group({
      employeeId: ['', Validators.required],
      warningFromId: ['', Validators.required],
      subject: ['', Validators.required],
      severity: ['', Validators.required],
      warningDate: ['', Validators.required],
      description: [''],
      improvementGoals: [''],
      improvementStartDate: [''],
      improvementEndDate: [''],
      attachment: [null]
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
      warningFromId: row.warningFromId,
      subject: row.subject,
      severity: row.severity,
      warningDate: row.warningDate,
      description: row.description,
      improvementGoals: row.improvementGoals,
      improvementStartDate: row.improvementStartDate,
      improvementEndDate: row.improvementEndDate
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

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.indicatorForm.patchValue({
        attachment: file
      });
    }
  }
}
