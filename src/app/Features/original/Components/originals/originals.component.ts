import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

/* ========= Interface ========= */
export interface Asset {
  employeeId: string;
  departmentId: string;
  assetTypeId: string;
  serialNumber: string;
  assetCode: string;
  purchaseDate: string; // yyyy-mm-dd
  purchaseCost: number;
  status: string;
  description?: string;
  location: string;
  createdAt: Date;
}

@Component({
  selector: 'app-originals',
  templateUrl: './originals.component.html',
  styleUrls: ['./originals.component.scss']
})
export class OriginalsComponent implements OnInit {

  /* ========= Table Data ========= */
  dataSource: Asset[] = [];

  /* ========= Form ========= */
  indicatorForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  /* ========= Form Init ========= */
private initForm(): void {
  this.indicatorForm = this.fb.group({
    employeeId: ['', Validators.required],
    departmentId: ['', Validators.required],
    assetTypeId: ['', Validators.required],

    serialNumber: ['', Validators.required],
    assetCode: ['', Validators.required],

    purchaseDate: ['', Validators.required],
    warrantyEndDate: ['', Validators.required],

    purchaseCost: [null, [Validators.required, Validators.min(0)]],
    usageLife: [null],
    salvageValue: [null],

    status: ['', Validators.required],
    description: [''],

    location: ['', Validators.required],
    supplier: [''],
    warrantyInfo: [''],

    depreciationMethod: [''],

    images: [null],        // ✅ صور
    documents: [null]      // ✅ وثائق
  });
}

  /* ========= Add Button ========= */
  onAddClick(): void {
    this.indicatorForm.reset();
  }

  /* ========= Save ========= */
  saveIndicator(): void {
    if (this.indicatorForm.invalid) {
      this.indicatorForm.markAllAsTouched();
      return;
    }

    const newAsset: Asset = {
      ...this.indicatorForm.value,
      purchaseCost: Number(this.indicatorForm.value.purchaseCost),
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newAsset];

    const modalElement = document.getElementById('addIndicatorModal');
    const modalInstance = bootstrap?.Modal.getInstance(modalElement);
    modalInstance?.hide();

    console.log('Asset saved:', newAsset);
  }

  /* ========= Actions ========= */
  onView(asset: Asset): void {
    console.log('View asset:', asset);
  }

  onEdit(asset: Asset): void {
    console.log('Edit asset:', asset);
  }

  onDelete(asset: Asset): void {
    this.dataSource = this.dataSource.filter(item => item !== asset);
    console.log('Deleted asset:', asset);
  }
}
