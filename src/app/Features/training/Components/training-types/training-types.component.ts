import { calender } from './../../../../Core/Interfaces/imodal';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


declare var bootstrap: any;

const ELEMENT_DATA: calender[] = [];

@Component({
  selector: 'app-training-types',
  templateUrl: './training-types.component.html',
  styleUrls: ['./training-types.component.scss']
})
export class TrainingTypesComponent implements OnInit {

  dataSource: calender[] = ELEMENT_DATA;
  indicatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
  this.indicatorForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    status: ['نشط', Validators.required]
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

    const newEntry: calender = {
      ...this.indicatorForm.value,
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newEntry];

    const modalElement = document.getElementById('addIndicatorModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance?.hide();

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

