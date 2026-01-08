import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Promotions } from 'src/app/Core/Interfaces/imodal';

declare var bootstrap: any;

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  dataSource: Promotions[] = [];
  indicatorForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.indicatorForm = this.fb.group({
      employee: ['', Validators.required],
      previousTitle: ['', Validators.required],
      newTitle: ['', Validators.required],
      promotionDate: ['', Validators.required],
      effectiveDate: ['', Validators.required],
      salaryAdjustment: [null, [Validators.required, Validators.min(0)]],
      reason: [''],
      status: ['معلق', Validators.required],
      document: ['']
    });
  }

  onAddClick(): void {
    this.indicatorForm.reset({
      status: 'معلق'
    });
  }

  saveIndicator(): void {
    if (this.indicatorForm.invalid) {
      this.indicatorForm.markAllAsTouched();
      return;
    }

    const newPromotion: Promotions = {
      ...this.indicatorForm.value,
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newPromotion];

    const modalElement = document.getElementById('addIndicatorModal');
    const modalInstance = bootstrap?.Modal.getInstance(modalElement);
    modalInstance?.hide();

    console.log('Promotion saved:', newPromotion);
  }

  onView(row: Promotions): void {
    console.log('View', row);
  }

  onEdit(row: Promotions): void {
    console.log('Edit', row);
  }

  onDelete(index: number): void {
    this.dataSource.splice(index, 1);
    this.dataSource = [...this.dataSource];
  }
}
