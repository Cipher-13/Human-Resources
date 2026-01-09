import { Vacation } from './../../../../Core/Interfaces/itable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent implements OnInit {

  dataSource: Vacation[] = [];
  indicatorForm!: FormGroup;

  employees = [
    { id: 1, name: 'أحمد إيهاب' },
    { id: 2, name: 'محمد علي' },
    { id: 3, name: 'سارة حسن' }
  ];

  branches = [
    { id: 1, name: 'فرع القاهرة' },
    { id: 2, name: 'فرع الإسكندرية' }
  ];

  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.indicatorForm = this.fb.group({
      holidayName: ['', Validators.required],
      employeeId: ['', Validators.required],
      branchId: ['', Validators.required],

      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required],

      annualLeave: [false],
      paidLeave: [false],
      halfDay: [false]
    });
  }

  onAddClick(): void {
    this.indicatorForm.reset();
    this.selectedFile = null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

saveIndicator(): void {
  if (this.indicatorForm.invalid) {
    this.indicatorForm.markAllAsTouched();
    return;
  }

  const formValue = this.indicatorForm.value;

  const employee = this.employees.find(e => e.id === +formValue.employeeId);
  const branch = this.branches.find(b => b.id === +formValue.branchId);

  let type = '';
  if (formValue.annualLeave) type += 'سنوية ';
  if (formValue.paidLeave) type += 'مدفوعة ';
  if (formValue.halfDay) type += 'نصف يوم';

  const newVacation: Vacation = {
    holidayName: formValue.holidayName,

    employeeId: +formValue.employeeId,
    employeeName: employee?.name,

    branchId: +formValue.branchId,
    branchName: branch?.name,

    startDate: formValue.startDate,
    endDate: formValue.endDate,
    description: formValue.description,

    annualLeave: formValue.annualLeave,
    paidLeave: formValue.paidLeave,
    halfDay: formValue.halfDay,

    type: type.trim(),

    document: this.selectedFile,
    status: 'قيد المراجعة',
    createdAt: new Date()
  };

  this.dataSource = [...this.dataSource, newVacation];
  this.closeModal();
}

  onDelete(row: Vacation): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }
private closeModal(): void {
  const modalEl = document.getElementById('addVacationModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  modal?.hide();
}

}
