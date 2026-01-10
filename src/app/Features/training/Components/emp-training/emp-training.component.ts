import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/* ======= MODEL ======= */
export interface TrainingProgram {
  name: string;
  description: string;
  duration: number;
  cost: number;
  capacity: number;
  conditions?: string;
  mandatory: boolean;
  selfDelay: boolean;
  companyWide: boolean;
  document?: File | null;
  createdAt: Date;
}

declare var bootstrap: any;

@Component({
  selector: 'app-emp-training',
  templateUrl: './emp-training.component.html',
  styleUrls: ['./emp-training.component.scss']
})
export class EmpTrainingComponent implements OnInit {

  dataSource: TrainingProgram[] = [];
  indicatorForm!: FormGroup;

  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  /* ================= FORM INIT ================= */
  private initForm(): void {
    this.indicatorForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: [null, [Validators.required, Validators.min(1)]],
      cost: [null, [Validators.required, Validators.min(0)]],
      capacity: [null, [Validators.required, Validators.min(1)]],
      conditions: [''],
      mandatory: [false],
      selfDelay: [false],
      companyWide: [false]
    });
  }

  /* ================= ADD CLICK ================= */
  onAddClick(): void {
    this.indicatorForm.reset({
      mandatory: false,
      selfDelay: false,
      companyWide: false
    });
    this.selectedFile = null;
  }

  /* ================= FILE UPLOAD ================= */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  /* ================= SAVE ================= */
  saveIndicator(): void {
    if (this.indicatorForm.invalid) {
      this.indicatorForm.markAllAsTouched();
      return;
    }

    const formValue = this.indicatorForm.value;

    const newProgram: TrainingProgram = {
      name: formValue.name,
      description: formValue.description,
      duration: formValue.duration,
      cost: formValue.cost,
      capacity: formValue.capacity,
      conditions: formValue.conditions,
      mandatory: formValue.mandatory,
      selfDelay: formValue.selfDelay,
      companyWide: formValue.companyWide,
      document: this.selectedFile,
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newProgram];
    this.closeModal();
  }

  /* ================= DELETE ================= */
  onDelete(row: TrainingProgram): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }

  /* ================= MODAL CLOSE ================= */
  private closeModal(): void {
    const modalEl = document.getElementById('addVacationModal');
    if (!modalEl) return;
    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.hide();
  }

}
