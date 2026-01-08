import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsRoomsComponent } from './meetings-rooms.component';

describe('MeetingsRoomsComponent', () => {
  let component: MeetingsRoomsComponent;
  let fixture: ComponentFixture<MeetingsRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingsRoomsComponent]
    });
    fixture = TestBed.createComponent(MeetingsRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
