import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPolicyComponent } from './plan-policy.component';

describe('PlanPolicyComponent', () => {
  let component: PlanPolicyComponent;
  let fixture: ComponentFixture<PlanPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanPolicyComponent]
    });
    fixture = TestBed.createComponent(PlanPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
