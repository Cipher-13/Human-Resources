import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ratings } from 'src/app/Core/Interfaces/itable';

declare var bootstrap: any;


@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.scss']
})
export class AdvertismentComponent  {

  dataSource: Ratings[] = [];
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      frequency: ['', Validators.required],
      description: [''],
      status: ['نشط']
    });
  }

  onAddClick() {
    this.reviewForm.reset({ status: 'نشط' });
  }

  saveReviewCycle() {
    if (this.reviewForm.invalid) {
      this.reviewForm.markAllAsTouched();
      return;
    }

    const newCycle: Ratings = {
      ...this.reviewForm.value,
      statusClass:
        this.reviewForm.value.status === 'نشط'
          ? 'status-approved'
          : 'status-rejected',
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newCycle];

    bootstrap.Modal.getInstance(
      document.getElementById('reviewCycleModal')
    )?.hide();
  }

  onView(row: Ratings) {}
  onEdit(row: Ratings) {}
  onDelete(row: Ratings) {}
}

