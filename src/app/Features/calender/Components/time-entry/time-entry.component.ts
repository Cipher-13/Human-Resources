import { calender } from './../../../../Core/Interfaces/imodal';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


declare var bootstrap: any;

const ELEMENT_DATA: calender[] = [];

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {

  dataSource: calender[] = ELEMENT_DATA;
  indicatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.indicatorForm = this.fb.group({
      employee: ['', Validators.required],
      date: ['', Validators.required],
      hours: ['', [Validators.required, Validators.min(1)]],
      project: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {}

  onAddClick(): void {
    this.indicatorForm.reset();
  }

  saveIndicator(): void {
    if (this.indicatorForm.valid) {

      const newEntry: calender = {
        ...this.indicatorForm.value,
        createdAt: new Date()
      };

      this.dataSource = [...this.dataSource, newEntry];

      const modalElement = document.getElementById('addIndicatorModal');
      const modalInstance = bootstrap?.Modal.getInstance(modalElement);
      modalInstance?.hide();

      console.log('Time Entry saved:', newEntry);

    } else {
      this.indicatorForm.markAllAsTouched();
    }
  }

  onView(row: calender): void {
    console.log('View', row);
  }

  onEdit(row: calender): void {
    console.log('Edit', row);
  }

  onDelete(row: calender): void {
    console.log('Delete', row);
  }
}
