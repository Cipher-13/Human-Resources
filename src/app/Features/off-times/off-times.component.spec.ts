import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTimesComponent } from './off-times.component';

describe('OffTimesComponent', () => {
  let component: OffTimesComponent;
  let fixture: ComponentFixture<OffTimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffTimesComponent]
    });
    fixture = TestBed.createComponent(OffTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
