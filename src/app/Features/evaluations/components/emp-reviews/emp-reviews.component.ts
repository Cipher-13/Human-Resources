import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from './../../../../Core/Interfaces/itable';

declare var bootstrap: any;

@Component({
  selector: 'app-emp-reviews',
  templateUrl: './emp-reviews.component.html',
  styleUrls: ['./emp-reviews.component.scss']
})
export class EmpReviewsComponent {

  dataSource: Review[] = [];
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      employeeName: ['', Validators.required],
      reviewerName: ['', Validators.required],
      reviewCycle: ['', Validators.required],
      reviewDate: ['', Validators.required],
      category: ['', Validators.required],
      status: ['المقرر']
    });
  }

  onAddClick() {
    this.reviewForm.reset({ status: 'المقرر' });
  }

  saveReview() {
    if (this.reviewForm.invalid) {
      this.reviewForm.markAllAsTouched();
      return;
    }

    const newReview: Review = {
      ...this.reviewForm.value,
      statusClass:
        this.reviewForm.value.status === 'المقرر'
          ? 'status-approved'
          : 'status-rejected'
    };

    this.dataSource = [...this.dataSource, newReview];

    bootstrap.Modal.getInstance(
      document.getElementById('empReviewModal')
    )?.hide();
  }

  onView(row: Review) {}
  onEdit(row: Review) {}
  onDelete(row: Review) {}
}
