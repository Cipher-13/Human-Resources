import { Trip } from './../../../../Core/Interfaces/itable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  dataSource: Trip[] = [];
  indicatorForm!: FormGroup;

  employees = [
    { id: 1, name: 'أحمد إيهاب' },
    { id: 2, name: 'محمد علي' },
    { id: 3, name: 'سارة حسن' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.indicatorForm = this.fb.group({
      employeeId: ['', Validators.required],

      purpose: ['', Validators.required],
      destination: ['', Validators.required],

      startDate: ['', Validators.required],
      endDate: ['', Validators.required],

      description: ['', Validators.required],
      expectedResults: ['', Validators.required],

      advanceAmount: [0, [Validators.required, Validators.min(0)]],
      documents: [''],

      status: ['قيد المراجعة']
    });
  }

  onAddClick(): void {
    this.indicatorForm.reset({
      status: 'قيد المراجعة'
    });
  }

  saveIndicator(): void {
    if (this.indicatorForm.invalid) {
      this.indicatorForm.markAllAsTouched();
      return;
    }

    const formValue = this.indicatorForm.value;

    const employee = this.employees.find(
      emp => emp.id === +formValue.employeeId
    );

    const newTrip: Trip = {
      ...formValue,
      employeeId: +formValue.employeeId,
      employeeName: employee?.name,
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newTrip];
    this.closeModal();

    console.log('Trip saved:', newTrip);
  }

  onDelete(row: Trip): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }

  // ===== Modal helpers =====
  private closeModal(): void {
    const modalEl = document.getElementById('addResignationModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal?.hide();
  }
}
