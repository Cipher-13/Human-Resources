import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpTargetsComponent } from './emp-targets.component';

describe('EmpTargetsComponent', () => {
  let component: EmpTargetsComponent;
  let fixture: ComponentFixture<EmpTargetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpTargetsComponent]
    });
    fixture = TestBed.createComponent(EmpTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
