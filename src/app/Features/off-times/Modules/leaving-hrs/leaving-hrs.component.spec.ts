import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavingHrsComponent } from './leaving-hrs.component';

describe('LeavingHrsComponent', () => {
  let component: LeavingHrsComponent;
  let fixture: ComponentFixture<LeavingHrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavingHrsComponent]
    });
    fixture = TestBed.createComponent(LeavingHrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
