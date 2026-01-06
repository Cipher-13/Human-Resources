import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPrerequisitesComponent } from './plan-prerequisites.component';

describe('PlanPrerequisitesComponent', () => {
  let component: PlanPrerequisitesComponent;
  let fixture: ComponentFixture<PlanPrerequisitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanPrerequisitesComponent]
    });
    fixture = TestBed.createComponent(PlanPrerequisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
