import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialActivityComponent } from './financial-activity.component';

describe('FinancialActivityComponent', () => {
  let component: FinancialActivityComponent;
  let fixture: ComponentFixture<FinancialActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialActivityComponent]
    });
    fixture = TestBed.createComponent(FinancialActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
