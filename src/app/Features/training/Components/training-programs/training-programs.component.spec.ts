import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgramsComponent } from './training-programs.component';

describe('TrainingProgramsComponent', () => {
  let component: TrainingProgramsComponent;
  let fixture: ComponentFixture<TrainingProgramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingProgramsComponent]
    });
    fixture = TestBed.createComponent(TrainingProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
