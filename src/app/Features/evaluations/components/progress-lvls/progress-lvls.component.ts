import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ratings } from 'src/app/Core/Interfaces/itable';

// Declare Bootstrap for modal manipulation
declare var bootstrap: any;

const ELEMENT_DATA: Ratings[] = [];

@Component({
  selector: 'app-progress-lvls',
  templateUrl: './progress-lvls.component.html',
  styleUrls: ['./progress-lvls.component.scss']
})
export class ProgressLvlsComponent implements OnInit {
  dataSource: Ratings[] = ELEMENT_DATA;
  indicatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.indicatorForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: ['نشط']
    });
  }

  ngOnInit(): void {}

  onAddClick() {
    this.indicatorForm.reset({ status: 'نشط' });
  }

  saveIndicator() {
    if (this.indicatorForm.valid) {
      const newIndicator: Ratings = {
        ...this.indicatorForm.value,
        statusClass: this.indicatorForm.value.status === 'نشط' ? 'status-approved' : 'status-rejected',
        createdAt: new Date()
      };

      this.dataSource = [...this.dataSource, newIndicator];

      // Close modal using Bootstrap API
      const modalElement = document.getElementById('addIndicatorModal');
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }

      console.log('Indicator saved:', newIndicator);
    } else {
      this.indicatorForm.markAllAsTouched();
    }
  }

  onView(row: Ratings) {
    console.log('View', row);
  }

  onEdit(row: Ratings) {
    console.log('Edit', row);
  }

  onDelete(row: Ratings) {
    console.log('Delete', row);
  }
}
