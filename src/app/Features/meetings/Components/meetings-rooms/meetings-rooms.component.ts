import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rooms } from './../../../../Core/Interfaces/itable';

declare var bootstrap: any;

@Component({
  selector: 'app-meetings-rooms',
  templateUrl: './meetings-rooms.component.html',
  styleUrls: ['./meetings-rooms.component.scss']
})
export class MeetingsRoomsComponent implements OnInit {

  dataSource: Rooms[] = [];
  indicatorForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.indicatorForm = this.fb.group({
      name: ['', Validators.required],          // اسم الغرفة
      description: [''],                        // وصف
      meeting: ['', Validators.required],       // النوع
      location: ['', Validators.required],      // الموقع
      capacity: [null, Validators.required],    // السعة
      equipment: ['', Validators.required],     // المعدات
      bookingTitle: ['', Validators.required],  // عنوان الحجز
      status: ['نشط', Validators.required]      // الحالة
    });
  }

  onAddClick(): void {
    this.indicatorForm.reset({
      status: 'نشط'
    });
  }

  saveIndicator(): void {
    if (this.indicatorForm.invalid) {
      this.indicatorForm.markAllAsTouched();
      return;
    }

    const newRoom: Rooms = {
      ...this.indicatorForm.value,
      createdAt: new Date()
    };

    this.dataSource = [...this.dataSource, newRoom];
    this.closeModal();

    console.log('Room saved:', newRoom);
  }

  onEdit(row: Rooms): void {
    this.indicatorForm.patchValue(row);
    this.openModal();
  }

  onDelete(row: Rooms): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }

  onView(row: Rooms): void {
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
