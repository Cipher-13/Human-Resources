import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { meetings } from './../../../../Core/Interfaces/itable';

declare var bootstrap: any;

@Component({
  selector: 'app-meetings-lectures',
  templateUrl: './meetings-lectures.component.html',
  styleUrls: ['./meetings-lectures.component.scss']
})
export class MeetingsLecturesComponent implements OnInit {

  dataSource: meetings[] = [];
  indicatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.indicatorForm = this.fb.group({
      meeting: ['', Validators.required],
      subject: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      recordedBy: ['', Validators.required],
      registrationDate: ['', Validators.required],
      registrar: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onAddClick(): void {
    this.indicatorForm.reset();
  }

  saveIndicator(): void {
    if (this.indicatorForm.valid) {
      const newEntry: meetings = {
        ...this.indicatorForm.value,
        createdAt: new Date()
      };
      this.dataSource = [...this.dataSource, newEntry];

      const modalElement = document.getElementById('addIndicatorModal');
      if (modalElement) {
        const modalInstance = bootstrap?.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
        modalInstance.hide();
      }

      console.log('Meeting saved:', newEntry);
    } else {
      this.indicatorForm.markAllAsTouched();
    }
  }

  onEdit(row: meetings): void {
    this.indicatorForm.patchValue(row);

    const modalElement = document.getElementById('addIndicatorModal');
    if (modalElement) {
      const modalInstance = bootstrap?.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }

  onDelete(row: meetings): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
    console.log('Deleted:', row);
  }

  onView(row: meetings): void {
    console.log('View:', row);
  }
}
