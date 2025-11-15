import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffDaysComponent } from './off-days.component';

describe('OffDaysComponent', () => {
  let component: OffDaysComponent;
  let fixture: ComponentFixture<OffDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffDaysComponent]
    });
    fixture = TestBed.createComponent(OffDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
