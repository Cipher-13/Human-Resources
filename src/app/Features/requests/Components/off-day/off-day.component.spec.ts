import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffDayComponent } from './off-day.component';

describe('OffDayComponent', () => {
  let component: OffDayComponent;
  let fixture: ComponentFixture<OffDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffDayComponent]
    });
    fixture = TestBed.createComponent(OffDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
