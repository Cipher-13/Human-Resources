import { Advertisement } from './../../../../Core/Interfaces/itable';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.scss']
})
export class AdvertismentComponent {
  dataSource: Advertisement[] = [];
  advertisementForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.advertisementForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      shortDescription: [''],
      content: [''],
      isFeatured: [false],
      isHighPriority: [false],
      isCompanyWide: [false],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      targetBranches: ['', Validators.required],
      targetDepartments: ['', Validators.required]
    });
  }

  onAddClick() {
    this.advertisementForm.reset({
      isFeatured: false,
      isHighPriority: false,
      isCompanyWide: false
    });

    // Programmatic trigger for the modal
    const modalElement = document.getElementById('advertisementModal');
    if (modalElement) {
      let modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (!modalInstance) {
        modalInstance = new bootstrap.Modal(modalElement);
      }
      modalInstance.show();
    }
  }

  saveAdvertisement() {
    if (this.advertisementForm.invalid) {
      this.advertisementForm.markAllAsTouched();
      return;
    }

    const formData = this.advertisementForm.value;

    const newAd: Advertisement = {
      ...formData,
      createdAt: new Date(),
      status: 'نشط',
      statusClass: 'status-approved'
    };

    console.log('Saving Advertisement:', newAd);
    this.dataSource = [...this.dataSource, newAd];

    // Close Modal
    const modalElement = document.getElementById('advertisementModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }

    this.advertisementForm.reset({
      isFeatured: false,
      isHighPriority: false,
      isCompanyWide: false
    });
  }

  onView(row: Advertisement) {}
  onEdit(row: Advertisement) {}
  onDelete(row: Advertisement) {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }
}
