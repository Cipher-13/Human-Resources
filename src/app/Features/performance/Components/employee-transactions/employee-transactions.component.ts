import { transaction } from './../../../../Core/Interfaces/itable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-employee-transactions',
  templateUrl: './employee-transactions.component.html',
  styleUrls: ['./employee-transactions.component.scss']
})
export class EmployeeTransactionsComponent implements OnInit {

  dataSource: transaction[] = [];
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

  departments = [
    { id: 1, name: 'الموارد البشرية' },
    { id: 2, name: 'تكنولوجيا المعلومات' }
  ];

  positions = [
    { id: 1, name: 'Senior Developer' },
    { id: 2, name: 'Team Leader' }
  ];

  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.indicatorForm = this.fb.group({
      employeeId: ['', Validators.required],
      branchId: ['', Validators.required],
      departmentId: ['', Validators.required],
      positionId: ['', Validators.required],

      transferDate: ['', Validators.required],
      executionDate: ['', Validators.required],

      description: ['', Validators.required]
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
    const department = this.departments.find(d => d.id === +formValue.departmentId);
    const position = this.positions.find(p => p.id === +formValue.positionId);

    const newTransfer: transaction = {
      employeeId: +formValue.employeeId,
      employeeName: employee?.name,

      branchId: +formValue.branchId,
      branchName: branch?.name,

      departmentId: +formValue.departmentId,
      departmentName: department?.name,

      positionId: +formValue.positionId,
      positionName: position?.name,

      transferDate: formValue.transferDate,
      executionDate: formValue.executionDate,

      description: formValue.description,
      document: this.selectedFile,

      status: 'قيد المراجعة',
      createdAt: new Date(),

      // Fixed: Added missing properties required by the interface and template
      transferType: 'تحويل داخلي', // Example value
      from: 'الفرع الحالي', // Example value
      to: branch?.name || '',
      purpose: '',
      destination: '',
      startDate: '',
      endDate: '',
      expectedResults: '',
      advanceAmount: 0
    };

    this.dataSource = [...this.dataSource, newTransfer];
    this.closeModal();

    console.log('Transfer saved:', newTransfer);
  }

  onDelete(row: transaction): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }

  private closeModal(): void {
    const modalEl = document.getElementById('addTransferModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal?.hide();
  }
}
