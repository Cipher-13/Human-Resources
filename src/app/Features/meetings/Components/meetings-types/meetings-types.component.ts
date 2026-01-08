import { meetings } from './../../../../Core/Interfaces/itable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

declare var bootstrap: any;
const ELEMENT_DATA: meetings[] = [];

@Component({
  selector: 'app-meetings-types',
  templateUrl: './meetings-types.component.html',
  styleUrls: ['./meetings-types.component.scss']
})
export class MeetingsTypesComponent implements OnInit {
  dataSource: meetings[] = [];
  indicatorForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.indicatorForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: ['نشط', Validators.required],
      // Additional fields if needed based on table columns
      defaultDuration: [null],
      meetingsCount: [0]
    });
  }

  ngOnInit(): void {
    // Initial data load if necessary
  }

  onAddClick(): void {
    this.indicatorForm.reset({
      status: 'نشط',
      meetingsCount: 0
    });
  }

  saveIndicator(): void {
    if (this.indicatorForm.valid) {
      const newEntry: meetings = {
        ...this.indicatorForm.value,
        createdAt: new Date()
      };

      this.dataSource = [...this.dataSource, newEntry];

      // Close Bootstrap modal
      const modalElement = document.getElementById('addIndicatorModal');
      if (modalElement) {
        const modalInstance = bootstrap?.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
        modalInstance?.hide();
      }

      console.log('Meeting Type saved:', newEntry);
    } else {
      this.indicatorForm.markAllAsTouched();
    }
  }

  onView(row: meetings): void {
    console.log('View', row);
  }

  onEdit(row: meetings): void {
    console.log('Edit', row);
    this.indicatorForm.patchValue(row);
    // Logic to open modal for editing would go here
  }

  onDelete(row: meetings): void {
    console.log('Delete', row);
    this.dataSource = this.dataSource.filter(item => item !== row);
  }
}
