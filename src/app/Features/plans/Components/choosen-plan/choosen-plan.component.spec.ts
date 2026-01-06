import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosenPlanComponent } from './choosen-plan.component';

describe('ChoosenPlanComponent', () => {
  let component: ChoosenPlanComponent;
  let fixture: ComponentFixture<ChoosenPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosenPlanComponent]
    });
    fixture = TestBed.createComponent(ChoosenPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
