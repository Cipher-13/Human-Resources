import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quit } from './../../../../Core/Interfaces/imodal';

declare var bootstrap: any;

@Component({
  selector: 'app-originals-types',
  templateUrl: './originals-types.component.html',
  styleUrls: ['./originals-types.component.scss']
})
export class OriginalsTypesComponent implements OnInit {

  indicatorForm!: FormGroup;
  dataSource: Quit[] = [];

  isEditMode = false;
  selectedRowIndex: number | null = null;

  employees = [
    { id: 1, name: 'أحمد إيهاب' },
    { id: 2, name: 'محمد علي' },
    { id: 3, name: 'سارة حسن' }
  ];

  reasons = [
    { id: 1, name: 'أسباب شخصية' },
    { id: 2, name: 'ظروف عمل' },
    { id: 3, name: 'أسباب صحية' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.indicatorForm = this.fb.group({
      employeeId: ['', Validators.required],
      type: ['', Validators.required],

      resignationDate: ['', Validators.required],
      lastWorkingDay: ['', Validators.required],
      noticePeriod: [null, [Validators.required, Validators.min(1)]],

      reasonType: ['', Validators.required],
      reasonDescription: [''],

      hours: [null, Validators.required],
      capacity: [null, Validators.required],

      status: ['قيد المراجعة'],
      attachment: [null]
    });
  }
  onAddClick(): void {
    this.isEditMode = false;
    this.selectedRowIndex = null;

    this.indicatorForm.reset({
      status: 'قيد المراجعة'
    });

    this.openModal();
  }

  saveIndicator(): void {
    if (this.indicatorForm.invalid) {
      this.indicatorForm.markAllAsTouched();
      return;
    }

    const emp = this.employees.find(
      e => e.id === +this.indicatorForm.value.employeeId
    );

    const reason = this.reasons.find(
      r => r.id === +this.indicatorForm.value.reasonType
    );

    const formValue: Quit = {
      ...this.indicatorForm.value,

      employeeId: +this.indicatorForm.value.employeeId,
      reasonType: +this.indicatorForm.value.reasonType,
      noticePeriod: +this.indicatorForm.value.noticePeriod,
      hours: +this.indicatorForm.value.hours,
      capacity: +this.indicatorForm.value.capacity,

      resignationDate: new Date(this.indicatorForm.value.resignationDate),
      lastWorkingDay: new Date(this.indicatorForm.value.lastWorkingDay),

      employeeName: emp?.name,
      reasonName: reason?.name,

      createdAt: new Date()
    };

    if (this.isEditMode && this.selectedRowIndex !== null) {
      this.dataSource[this.selectedRowIndex] = formValue;
      this.dataSource = [...this.dataSource];
    } else {
      this.dataSource = [...this.dataSource, formValue];
    }

    this.closeModal();
  }

  onEdit(row: Quit): void {
    this.isEditMode = true;
    this.selectedRowIndex = this.dataSource.indexOf(row);

    this.indicatorForm.patchValue({
      ...row,
      resignationDate: this.formatDate(row.resignationDate),
      lastWorkingDay: this.formatDate(row.lastWorkingDay)
    });

    this.openModal();
  }

  onDelete(row: Quit): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.indicatorForm.patchValue({ attachment: file });
    }
  }

  openModal(): void {
    const modalEl = document.getElementById('addResignationModal');
    if (!modalEl) return;

    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  closeModal(): void {
    const modalEl = document.getElementById('addResignationModal');
    if (!modalEl) return;

    const modal = bootstrap.Modal.getInstance(modalEl);
    modal?.hide();
  }

  private formatDate(date: Date | string): string {
    return new Date(date).toISOString().substring(0, 10);
  }
}
