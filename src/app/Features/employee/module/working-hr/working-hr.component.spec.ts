import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingHrComponent } from './working-hr.component';

describe('WorkingHrComponent', () => {
  let component: WorkingHrComponent;
  let fixture: ComponentFixture<WorkingHrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingHrComponent]
    });
    fixture = TestBed.createComponent(WorkingHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
