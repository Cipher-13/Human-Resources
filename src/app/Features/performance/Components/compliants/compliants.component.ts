import { Complain } from './../../../../Core/Interfaces/itable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var bootstrap: any;

const ELEMENT_DATA: Complain[] = [];

@Component({
  selector: 'app-compliants',
  templateUrl: './compliants.component.html',
  styleUrls: ['./compliants.component.scss']
})
export class CompliantsComponent implements OnInit {

  dataSource: Complain[] = ELEMENT_DATA;
  indicatorForm: FormGroup;

  employees = [
    { id: 1, name: 'أحمد إيهاب' },
    { id: 2, name: 'محمد علي' },
    { id: 3, name: 'سارة حسن' }
  ];

  complaintTypes = ['شكوى سلوك', 'شكوى مالية', 'شكوى إدارية'];

  constructor(private fb: FormBuilder) {
    this.indicatorForm = this.fb.group({
      complainantId: ['', Validators.required],
      againstId: ['', Validators.required],
      complaintType: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      attachments: [''],
      sendWithName: [false],
      sendWithoutName: [false]
    });
  }

  ngOnInit(): void {}

  onAddClick(): void {
    this.indicatorForm.reset({
      sendWithName: false,
      sendWithoutName: false
    });
  }

  saveIndicator(): void {
    if (this.indicatorForm.valid) {
      const selectedEmployee = this.employees.find(emp => emp.id === this.indicatorForm.value.complainantId);

      const newEntry: Complain = {
        ...this.indicatorForm.value,
        employeeName: selectedEmployee?.name || '',
        createdAt: new Date()
      };

      this.dataSource = [...this.dataSource, newEntry];

      const modalElement = document.getElementById('addResignationModal');
      const modalInstance = bootstrap?.Modal.getInstance(modalElement);
      modalInstance?.hide();

      console.log('Complain saved:', newEntry);
    } else {
      this.indicatorForm.markAllAsTouched();
    }
  }

  onView(row: Complain): void {
    console.log('View', row);
  }

  onEdit(row: Complain): void {
    this.indicatorForm.patchValue({
      complainantId: row.complainantId,
      againstId: row.againstId,
      complaintType: row.complaintType,
      date: row.date,
      description: row.description,
      attachments: row.attachments,
      sendWithName: row.sendWithName,
      sendWithoutName: row.sendWithoutName
    });

    const modalElement = document.getElementById('addResignationModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  onDelete(row: Complain): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
    console.log('Deleted', row);
  }
}
