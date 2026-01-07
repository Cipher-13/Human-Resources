import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { prizes } from 'src/app/Core/Interfaces/imodal';

// Declare Bootstrap for modal manipulation
declare var bootstrap: any;


@Component({
  selector: 'app-prizes-type',
  templateUrl: './prizes-type.component.html',
  styleUrls: ['./prizes-type.component.scss']
})
export class PrizesTypeComponent implements OnInit {

  dataSource: prizes[] = [];
  prizeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.prizeForm = this.fb.group({
      employeeName: ['', Validators.required],
      prizeType: ['', Validators.required],
      grantDate: ['', Validators.required],
      gift: [''],
      value: [null, Validators.required],
      status: ['نشط', Validators.required]
    });
  }

  onAddClick() {
    this.prizeForm.reset({ status: 'نشط' });
  }

  saveIndicator() {
    if (this.prizeForm.invalid) {
      this.prizeForm.markAllAsTouched();
      return;
    }

    const formValue = this.prizeForm.value;

    const newPrize: prizes = {
      ...formValue,
      grantDate: new Date(formValue.grantDate),
      statusClass:
        formValue.status === 'نشط'
          ? 'status-approved'
          : 'status-rejected',
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newPrize];

    const modalElement = document.getElementById('addIndicatorModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance?.hide();
  }

  onView(row: prizes) {
    console.log('View', row);
  }

  onEdit(row: prizes) {
    console.log('Edit', row);
  }

  onDelete(index: number) {
    this.dataSource.splice(index, 1);
    this.dataSource = [...this.dataSource];
  }
}
