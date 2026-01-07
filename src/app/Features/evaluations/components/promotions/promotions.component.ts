import { Promotions } from './../../../../Core/Interfaces/imodal';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var bootstrap: any;

const ELEMENT_DATA: Promotions[] = [];

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  dataSource: Promotions[] = ELEMENT_DATA;
  indicatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.indicatorForm = this.fb.group({
      employee: ['', Validators.required],
      previousTitle: ['', Validators.required],
      newTitle: ['', Validators.required],
      promotionDate: ['', Validators.required],
      effectiveDate: ['', Validators.required],
      salaryAdjustment: ['', [Validators.required, Validators.min(0)]],
      status: ['نشط', Validators.required],
      document: ['']
    });
  }

  ngOnInit(): void {}

  onAddClick(): void {
    this.indicatorForm.reset({
      status: 'نشط'
    });
  }

  saveIndicator(): void {
    if (this.indicatorForm.valid) {

      const newPromotion: Promotions = {
        ...this.indicatorForm.value,
        createdAt: new Date()
      };

      this.dataSource = [...this.dataSource, newPromotion];

      const modalElement = document.getElementById('addIndicatorModal');
      const modalInstance = bootstrap?.Modal.getInstance(modalElement);
      modalInstance?.hide();

      console.log('Promotion saved:', newPromotion);

    } else {
      this.indicatorForm.markAllAsTouched();
    }
  }

  onView(row: Promotions): void {
    console.log('View', row);
  }

  onEdit(row: Promotions): void {
    console.log('Edit', row);
  }

  onDelete(row: Promotions): void {
    console.log('Delete', row);
  }
}
