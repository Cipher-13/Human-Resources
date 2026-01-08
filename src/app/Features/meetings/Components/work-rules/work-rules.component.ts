import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionItem } from 'src/app/Core/Interfaces/imodal';

declare var bootstrap: any;



@Component({
  selector: 'app-work-rules',
  templateUrl: './work-rules.component.html',
  styleUrls: ['./work-rules.component.scss']
})
export class WorkRulesComponent implements OnInit {

  dataSource: ActionItem[] = [];
  indicatorForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.indicatorForm = this.fb.group({
      meetingId: ['', Validators.required],
      trainingItem: ['', Validators.required],
      description: [''],
      assignedTo: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      progress: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100)]
      ],
      notes: ['']
    });
  }

  onAddClick(): void {
    this.indicatorForm.reset({
      progress: 0
    });
  }

  saveIndicator(): void {
    if (this.indicatorForm.invalid) {
      this.indicatorForm.markAllAsTouched();
      return;
    }

    const newActionItem: ActionItem = {
      ...this.indicatorForm.value,
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newActionItem];
    this.closeModal();

    console.log('Action Item saved:', newActionItem);
  }

  onEdit(row: ActionItem): void {
    this.indicatorForm.patchValue(row);
    this.openModal();
  }

  onDelete(row: ActionItem): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }

  onView(row: ActionItem): void {
    console.log('View:', row);
  }

  private openModal(): void {
    const modalElement = document.getElementById('addIndicatorModal');
    if (!modalElement) return;

    const modal =
      bootstrap.Modal.getInstance(modalElement) ||
      new bootstrap.Modal(modalElement);

    modal.show();
  }

  private closeModal(): void {
    const modalElement = document.getElementById('addIndicatorModal');
    if (!modalElement) return;

    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
  }
}
