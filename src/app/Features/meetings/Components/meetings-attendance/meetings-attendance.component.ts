import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { meetings } from 'src/app/Core/Interfaces/itable';

declare var bootstrap: any;

@Component({
  selector: 'app-meetings-attendance',
  templateUrl: './meetings-attendance.component.html',
  styleUrls: ['./meetings-attendance.component.scss']
})
export class MeetingsAttendanceComponent implements OnInit {

  dataSource: meetings[] = [];
  indicatorForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.indicatorForm = this.fb.group({
      meeting: ['', Validators.required],        // الاجتماع
      employee: ['', Validators.required],       // الموظف
      attendanceType: ['', Validators.required], // نوع الحضور
      responseStatus: ['', Validators.required], // حالة الإجابة
      attendanceStatus: ['', Validators.required], // حالة الحضور
      description: ['']                           // سبب الرفض
    });
  }

  onAddClick(): void {
    this.indicatorForm.reset();
  }

  saveIndicator(): void {
    if (this.indicatorForm.invalid) {
      this.indicatorForm.markAllAsTouched();
      return;
    }

    const newEntry: meetings = {
      ...this.indicatorForm.value,
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newEntry];
    this.closeModal();

    console.log('Meeting saved:', newEntry);
  }

  onEdit(row: meetings): void {
    this.indicatorForm.patchValue(row);
    this.openModal();
  }

  onDelete(row: meetings): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
    console.log('Deleted:', row);
  }

  onView(row: meetings): void {
    console.log('View:', row);
  }

  private closeModal(): void {
    const modalElement = document.getElementById('addIndicatorModal');
    if (modalElement) {
      const modalInstance =
        bootstrap.Modal.getInstance(modalElement) ||
        new bootstrap.Modal(modalElement);
      modalInstance.hide();
    }
  }

  private openModal(): void {
    const modalElement = document.getElementById('addIndicatorModal');
    if (modalElement) {
      const modalInstance =
        bootstrap.Modal.getInstance(modalElement) ||
        new bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }
}
