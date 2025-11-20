import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffPayrollComponent } from './off-payroll.component';

describe('OffPayrollComponent', () => {
  let component: OffPayrollComponent;
  let fixture: ComponentFixture<OffPayrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffPayrollComponent]
    });
    fixture = TestBed.createComponent(OffPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
