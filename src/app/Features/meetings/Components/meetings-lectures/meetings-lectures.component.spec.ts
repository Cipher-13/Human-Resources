import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsLecturesComponent } from './meetings-lectures.component';

describe('MeetingsLecturesComponent', () => {
  let component: MeetingsLecturesComponent;
  let fixture: ComponentFixture<MeetingsLecturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingsLecturesComponent]
    });
    fixture = TestBed.createComponent(MeetingsLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
