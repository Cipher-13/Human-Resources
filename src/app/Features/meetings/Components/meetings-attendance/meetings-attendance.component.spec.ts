import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsAttendanceComponent } from './meetings-attendance.component';

describe('MeetingsAttendanceComponent', () => {
  let component: MeetingsAttendanceComponent;
  let fixture: ComponentFixture<MeetingsAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingsAttendanceComponent]
    });
    fixture = TestBed.createComponent(MeetingsAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
